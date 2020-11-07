export interface User {
  uid: string;
  name: string;
  avatarURL: string;
  createdAt: Date;
  joinedEvent: {
    uploadImageIds: string[];
    joinedEventId: string;
  };
}
