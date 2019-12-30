import { Component, ViewChild, NgModule } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent {

  badCredentials:boolean;
  constructor(private router: Router, private authService:AuthService) {
    this.badCredentials = false;
  }

  onLogin(loginForm: NgForm) {
    const email = loginForm.value.username+"@gmail.com";
    const password = loginForm.value.pass;
    this.badCredentials = this.authService.signInUser(email,password);  
   /* if(this.authService.isAuthenticated)
    {
      this.router.navigate(['home']);
    }
    else{
          console.log("Login failed.")
    }
      */
  }
}
