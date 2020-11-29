import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { CommentWithUser } from 'src/app/interfaces/comment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
})
export class CommentListComponent implements OnInit {
  @Input() eventId: string;
  @Input() imageId: string;

  comments$: Observable<CommentWithUser[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getCommentsWithUser(
      this.eventId,
      this.imageId
    );
  }

  deleteComment(commentId: string): Promise<void> {
    return this.commentService.deleteComment(
      this.eventId,
      this.imageId,
      commentId
    );
  }
}
