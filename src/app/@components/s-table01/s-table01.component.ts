import { Component } from '@angular/core';
import { PeriodicElemStoreService } from './../../@store/periodic-elem-store.service';
import { PeColumns } from './../../common/model';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-s-table01',
  templateUrl: './s-table01.component.html',
  styleUrls: ['./s-table01.component.scss'],
})
export class STable01Component {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(public pess: PeriodicElemStoreService) {}
  PeColumns = PeColumns;
}
