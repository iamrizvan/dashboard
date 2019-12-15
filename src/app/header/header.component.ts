import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  product = 'E2E Service Orchestrator';
  elife = 'eLife';
  ucaas = 'UCaaS';
  vsaas = 'VSaaS';
  clean_pipe = 'Clean Pipe';
  ntcpe = 'Nokia Thin CPE';

}
