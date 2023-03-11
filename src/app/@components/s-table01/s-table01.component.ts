import { Component, Input } from '@angular/core';
import { PeriodicElemStoreService } from './../../@store/periodic-elem-store.service';
import { Cols, PeriodicElement } from './../../common/model';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-s-table01',
  templateUrl: './s-table01.component.html',
  styleUrls: ['./s-table01.component.scss'],
})
export class STable01Component<T> {
  @Input() columns: Cols<T>[] = [];
  constructor(public pess: PeriodicElemStoreService) {}
  get columnNames() {
    return this.columns.map(({ column }) => column);
  }
}
