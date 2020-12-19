export interface Event {
  eventId: string;
  title: string;
  descliption: string;
  thumbnailURL: string;
  ownerId: string;
  createAt: firebase.default.firestore.Timestamp;
  joinedUserCount: number;
}
