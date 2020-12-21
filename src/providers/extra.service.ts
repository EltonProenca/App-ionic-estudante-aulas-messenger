
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class ExtraService {
  extras: any;
  upload: string;
  private user: User;

  constructor() { }

  public setExtras(data) {
    this.extras = data;


    console.log('setextra valor = ' + this.extras );

  }

  public getExtras() {
    return this.extras;

  }
  public setUpload(data: string) {
    this.upload = data;


    console.log('setUpload valor = ' + this.upload );

  }

  public getUpload() {
    return this.upload;

  }
setUser(user: User) {
  this.user = user;

}

getUser() {
  return this.user;

}


}
