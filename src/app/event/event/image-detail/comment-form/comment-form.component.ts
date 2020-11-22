import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentService } from 'src/app/services/comment.service';
import { Image } from 'src/app/interfaces/image';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  @Input() image: Image;
  commentForm = new FormControl('', [Validators.maxLength(400)]);

  constructor(
    private snackBer: MatSnackBar,
    private commentService: CommentService
  ) {}

  createComment(image) {
    const comment: Omit<
      Comment,
      'uid' | 'createdAt' | 'imageURL' | 'id' | 'eventId'
    > = {
      commentBody: this.commentForm.value,
    };
    this.commentService.createComment(image, comment).then(() => {
      this.snackBer.open('保存しました。');
    });
  }

  ngOnInit(): void {}
}
