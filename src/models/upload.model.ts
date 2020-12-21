export class Upload {

  key: string;
  keyUser: string;
  IdProf: string;
  user: string;
  tipoUsuario: string;
  file:File;
  name:string;
  comentario: string;
  url:string;
  progress:number;
  createdAt: Date = new Date();

  constructor(file:File) {
    this.file = file;
  }
}
