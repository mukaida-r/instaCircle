const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

export * from './user.function';
export { judgementPassword } from './event.function';
