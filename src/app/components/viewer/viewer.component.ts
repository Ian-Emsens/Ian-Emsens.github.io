import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from 'src/app/reducers';
import { State as CsvState } from 'src/app/reducers/csv.reducer';

import { loadCSV } from 'src/app/actions/csv';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  public state$: Observable<CsvState>;

  constructor(private store: Store<State>) {
    this.state$ = store.select('csv');
  }

  ngOnInit(): void {
    this.store.dispatch(loadCSV({
      path: 'data/test.csv',
      name: 'test'
    }));
  }

}
