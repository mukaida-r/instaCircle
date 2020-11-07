import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  uid: string;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthService
  ) {
    this.authService.user$.subscribe((user) => {
      this.uid = user?.uid;
    });
  }

  async uploadImages(eventId: string, files: File[]): Promise<void> {
    return Promise.all(
      files.map((file, index) => {
        const id = this.db.createId();
        const ref = this.storage.ref(`images/${id}-${index}`);
        return ref.put(file);
      })
    ).then(async (tasks) => {
      for (const task of tasks) {
        const imageId = this.db.createId();
        const imageURL = await task.ref.getDownloadURL();
        this.db.doc(`events/${eventId}/images/${imageId}`).set({
          imageId,
          uid: this.uid,
          imageURL,
          eventId,
          createAt: firebase.default.firestore.Timestamp.now(),
        });
      }
    });
  }

  getImages(eventId: string): Observable<Image[]> {
    return this.db.collection<Image>(`events/${eventId}/images`).valueChanges();
  }
}
