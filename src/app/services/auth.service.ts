import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';
import { shareReplay, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uid: string;
  user$: Observable<User> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        this.uid = afUser && afUser.uid;
        return this.userService.getUserData(afUser.uid);
      } else {
        return of(null);
      }
    }),
    shareReplay(1)
  );

  constructor(
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  async googlelogin(): Promise<void> {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return await this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.snackBar.open('ログインしました。', '閉じる');
      })
      .catch((error) => {
        this.snackBar.open(
          'ログインエラーです。数秒後にもう一度お試しください。',
          '閉じる'
        );
      });
  }

  async logout(): Promise<void> {
    return await this.afAuth
      .signOut()
      .then(() => {
        this.snackBar.open('ログアウトしました。', '閉じる');
      })
      .catch((error) => {
        this.snackBar.open(
          'ログアウトエラーです。数秒後にもう一度お試しください。',
          '閉じる'
        );
      });
  }
}
