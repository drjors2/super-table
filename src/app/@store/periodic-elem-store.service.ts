import { Injectable } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement } from '../common/model';
import { GenericStoreService } from './generic-store.service';

@Injectable({
  providedIn: 'root',
})
export class PeriodicElemStoreService extends GenericStoreService<PeriodicElement> {
  constructor() {
    super(ELEMENT_DATA);
  }
}
