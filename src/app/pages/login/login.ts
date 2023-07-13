import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../../interfaces/user.model';
import { AuthService } from '../../core/services/auth/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {

  constructor(
    private authService: AuthService,
    public router: Router,
  ) { }

  async loginGoogle() {
    await this.authService.GoogleAuth();
  }

   

  
}
