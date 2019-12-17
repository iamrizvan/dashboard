import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vsaas',
  templateUrl: './vsaas.component.html',
  styleUrls: ['./vsaas.component.scss']
})
export class VsaasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tot = 'Total Service Orders';
  completed = 'Instant Provisioned';
  modified = 'Modified Service Order';
  failed = 'Failed Service Order';
}
