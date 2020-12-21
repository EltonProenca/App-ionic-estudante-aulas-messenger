import { Injectable } from '@angular/core';
import { Path } from '../../models/conteudo/path.model';

@Injectable()
export class SetService {
  path: string;
  pathProf: string;
  pathUsers: string;
  pathMateria: string;
  extras: any;
  upload: string;
  private user: any;
 // private chat: any;
  pathUpdate: Path;
  id: string;
  idProf: string;

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
setUser(user: any) {
  this.user = user;

}

getUser() {
  return this.user;

}


setPath(path: string) {
  this.path = path;
  console.log('set path service' + this.path);

}

getPath() {
  return this.path;

}
setPathProf(pathProf: string) {
  this.pathProf = pathProf;
  console.log('set path Professor service' + this.pathProf);

}

getPathProf() {
  return this.pathProf;

}
setPathMateria(pathMateria: string) {
  this.pathMateria = pathMateria;
  console.log('set path materia service' + this.pathMateria);

}

getPathMateria() {
  return this.pathMateria;

}
setPathUsers(pathUsers: string) {
  this.pathUsers = pathUsers;
  console.log('set path service' + this.pathUsers);

}

getPathUsers() {
  return this.pathUsers;

}

setId( id: string) {
  this.id =  id;
  console.log('set Id usuario' + this.id);

}

getId() {
  return this.id;

}
setIdProf( idProf: string) {
  this.idProf =  idProf;
  console.log('set Id Professor' + this.idProf);

}

getIdProf() {
  return this.idProf;

}






}
