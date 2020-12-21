import { Component, Input } from '@angular/core';

import { User } from './../../models/user.model';
//import { IonicPage } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'user-info',
  templateUrl: 'user-info.component.html'
})
export class UserInfoComponent {
  ultimoAcesso: string;

  @Input() user: User;
  @Input() isMenu: boolean = false;

  constructor(public afAuth: AngularFireAuth) {

  }

}
