const functions = require('firebase-functions');
const admin = require('firebase-admin');

const db = admin.firestore();

export const judgementPassword = functions
  .region('asia-northeast1')
  .https.onCall(async (data: any, context: any) => {
    const event = (await db.doc(`private/${data.eventId}`).get()).data();
    const eventPassword = event.password;

    functions.logger.info(data);
    functions.logger.info(context);
    console.log(data);
    console.log(context);
    console.log(db);

    try {
      if (data.password === eventPassword) {
        return true;
      } else {
        return false;
      }
    } catch {
      throw new Error('認証に失敗しました');
    }
  });
