import { Observable, type Observer } from 'rxjs';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const observable: Observable<any> = Observable.create((observer: Observer<string>) => {
  observer.next('Leo');
  observer.next('Hotaru');
  observer.next('Siria');
  observer.complete(); //complete() tells us that we are done
});

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
observable.subscribe((res: any) => {
  console.log(res);
});
