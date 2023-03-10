import { Component } from '@angular/core';
import { PeColumns } from './common/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'superTable';
  peColumns=PeColumns
}
