import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  event = true; // TODO: eventがあるかないかを判定して、画像投稿ボタンの表示切替

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
