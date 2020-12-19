const functions = require('firebase-functions');
const admin = require('firebase-admin');
import { deleteCollectionByReference } from './utils/firebase.function';

const db = admin.firestore();

export const createUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate((user: any) => {
    return db.doc(`users/${user.uid}`).set(
      {
        uid: user.uid,
        name: user.displayName,
        avatarURL: user.photoURL,
        createdAt: new Date(),
      },
      { merge: true }
    );
  });

export const deleteAfUser = functions
  .region('asia-northeast1')
  .https.onCall((data: any, context: any) => {
    return admin.auth().deleteUser(data);
  });

export const deleteUserAccount = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user: any, _: any) => {
    const users = db.collection(`users`).where('uid', '==', user.uid);
    await deleteCollectionByReference(users);
    return;
  });
