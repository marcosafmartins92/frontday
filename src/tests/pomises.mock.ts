import { Observable, Subject } from "rxjs";

export const promiseSuccess = (ms, msg) => new Promise(resolve => setTimeout(() => resolve(msg), ms));
export const promiseFailure = (ms, msg) => new Promise((resolve, reject) => setTimeout(() => reject(msg), ms));
export const sequence = new Observable(sequenceSubscriber);

function sequenceSubscriber(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete('completed');
  return {unsubscribe() {}};
}