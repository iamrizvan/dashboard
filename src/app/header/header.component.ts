import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }
  product = 'E2E Service Orchestrator';
  elife = 'eLife';
  ucaas = 'UCaaS';
  vsaas = 'VSaaS';
  clean_pipe = 'Clean Pipe';
  ntcpe = 'Nokia Thin CPE';

   goToELife()
   {
        this.router.navigate(['elife'],{relativeTo : this.route})
   }
}
