import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { GoogleUser, User } from '../../../interfaces/user.model';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData = new BehaviorSubject(null);

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) { 
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (this.userData.getValue() !== null) {
        this.userData.next(user);
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['app/tabs/speakers']);
    });
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.SetUserData(result as unknown as GoogleUser);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(userGoogle: GoogleUser) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${userGoogle.user.uid}`
    );
    const userData = {
      uid: userGoogle.user.uid,
      email: userGoogle.user.email,
      displayName: userGoogle.user.displayName,
      photoURL: userGoogle.user.photoURL,
      emailVerified: userGoogle.user.emailVerified,
    }; 
    userGoogle.user;
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

  public getUserData() {
    return this.userData;
  }

  public setUserData(userData) {
    this.userData.next(userData)
  }
}
