import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ucaas',
  templateUrl: './ucaas.component.html',
  styleUrls: ['./ucaas.component.scss']
})
export class UcaasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tot = 'Total Service Orders';
  completed = 'Instant Provisioned';
  modified = 'Modified Service Order';
  failed = 'Failed Service Order';
  
}
