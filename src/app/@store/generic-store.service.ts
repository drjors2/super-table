import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
export class GenericStoreService<T> {
  public store$ = new BehaviorSubject<T[]>([]);
  constructor(tList: T[]) {
    this.store$.next([...tList]);
  }
}
