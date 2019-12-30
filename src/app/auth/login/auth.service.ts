import * as firebase from "firebase";
import { Router } from "@angular/router";

export class AuthService {
  badCredentials: boolean = false;
  constructor(private router: Router) {}
  token: String = null;

  signInUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
        this.badCredentials = true;
        this.router.navigate(["home"]);
      })
      .catch(error => console.log(error));
    return this.badCredentials;
  }
  signUpUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: String) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
