import { Component, ViewChild, AfterViewInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Dashboard";
  product = "E2E Service Orchestrator";
  isLoggedIn: boolean = false;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBNSAwmdPkPXVoeSyPK23ZXHQySf1VhDuk",
      authDomain: "dashboard-6a49c.firebaseapp.com"
    });
  }
}
