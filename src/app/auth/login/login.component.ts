import { Component, OnInit, ViewChild, NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // @ViewChild("myForm") signInForm:NgForm;

  constructor(private router: Router) { }

  ngOnInit() {
  }  

 
  loadHomePage()
  {
    // complex calculation 
    this.router.navigate(['home']);
  }

  onSubmit()
  {
    // complex calculation 
    this.router.navigate(['home']); 
  }
}
