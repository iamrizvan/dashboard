import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tot = 'Total Service Orders';
  completed = 'Instant Provisioned';
  modified = 'Modified Service Order';
  failed = 'Failed Service Order';

  

}
