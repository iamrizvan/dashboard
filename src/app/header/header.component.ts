import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/login/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authServiice: AuthService) { }

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

    logOutuser()
    {
       this.authServiice.logOut();
    }
}
