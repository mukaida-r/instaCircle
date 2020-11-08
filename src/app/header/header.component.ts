import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from '../interfaces/event';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  event = true; // TODO: eventがあるかないかを判定して、画像投稿ボタンの表示切替
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {}
}
