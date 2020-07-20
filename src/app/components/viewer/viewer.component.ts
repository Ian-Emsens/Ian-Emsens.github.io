import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  public portfolio: any;

  constructor() {
    this.portfolio = {
      foo: 'bar',
    }
  }

  ngOnInit(): void {
  }

}
