export interface Event {
  eventId: string;
  title: string;
  discliption: string;
  thumbnailURL: string;
  ownerId: string;
  createAt: firebase.default.firestore.Timestamp;
  joinedUserCount: number;
}
