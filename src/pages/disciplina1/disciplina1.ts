import { Upload } from './../../models/upload.model';
import { Component, ChangeDetectorRef} from '@angular/core';
import {  IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { User } from './../../models/user.model';
import { UserService } from './../../providers/user.service';
import { Observable } from 'rxjs/Observable';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExtraService } from '../../providers/extra.service';
import { SetService } from '../../providers/services-curso/set.service';
import firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-disciplina1',
  templateUrl: 'disciplina1.html',
})
export class Disciplina1Page {
  currentUpload: Upload;
  canEdit: boolean = false;
  uploadProgress: number;
  upList$: Observable<Upload[]>;
  referencia;

  isAndroid: boolean = false;
  public
  private file: File;

  currentUser: User;
  arquivosEnviados: Observable<Upload[]>;
  arquivosRecebidos: Observable<Upload[]>;
  selectedFiles: FileList;

  public fileForm: FormGroup;
  basepath: any;
  public curso: string;
  public Materia: string;

  public id: string;
  edit: boolean;
  messages: string;
  update: Upload;
 public comentario: string;


  constructor(
    private arquivosService: UploadServiceProvider,

    private upSvc: UploadServiceProvider,
    public message: ExtraService,
    public  formBuilder: FormBuilder,
    public userService: UserService,
    public setService: SetService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public cd: ChangeDetectorRef,
   ) {
    this.registerForm();
     this.arquivosEnviados =  this.arquivosService.getAllEnviados();
      this.arquivosRecebidos = this.arquivosService.getAllRecebidos();
      this.Materia = this.setService.getPathMateria();
   }

   ionViewDidLoad() {
    console.log('ionViewDidLoad DisciplinasgeralPage');
    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .subscribe((user: User) => {
        this.currentUser = user;
        this.curso = user.curso

      });
  }
  registerForm() {

    this.fileForm = this.formBuilder.group({
    comentario: ['']

  });

}
get Comentario() {
  return this.fileForm.get('comentario');
}
ResetForm() {
  this.fileForm.reset();
}
setPath(){
  this.basepath = this.setService.setPath(this.currentUser.pathMateria0);
}


  confirmacaoDelete(item: Upload) {
    let confirm = this.alerCtrl.create({
      title: 'Excluir Arquivo',
      message: 'Você tem certeza que deseja excluir este arquivo?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.arquivosService.deleteUpload(item);
          }
        }
      ]
    });
    confirm.present()
  }




  baixarArquivo(item: Upload) {
    let confirm = this.alerCtrl.create({
      title: 'BaixarArquivo',
      message: 'Você tem certeza que deseja Baixar este arquivo?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.arquivosService.baixarArquivo(item);
          }
        }
      ]
    });
    confirm.present()
  }

  baixarArquivoProf(item: Upload) {
    let confirm = this.alerCtrl.create({
      title: 'BaixarArquivo',
      message: 'Você tem certeza que deseja Baixar este arquivo?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.arquivosService.baixarArquivoProf(item);
          }
        }
      ]
    });
    confirm.present()
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
}

uploadSingle2() {
 // this.basepath = this.setService.setPath(this.currentUser.pathMateria0);
//  console.log('teste path diciplina =' + this.basepath);

  const formUser = this.fileForm.value;
  this.message.setUpload( formUser.comentario);
 console.log('teste enviar arquivo comentario = ' + formUser.comentario);
  console.log('teste enviar arquivo');
  const file = this.selectedFiles.item(0);
  this.currentUpload = new Upload(file);
  this.upSvc.pushUpload(this.currentUpload);
  this.ResetForm();

}

  uploadSingle() {

    this.currentUpload = this.fileForm.value;
    if (!this.edit) {

      const formUser = this.fileForm.value;
      this.message.setUpload( formUser.comentario);
      console.log('teste enviar arquivo comentario = ' + formUser.comentario);
      console.log('teste enviar arquivo');
      const file = this.selectedFiles.item(0);
      this.currentUpload = new Upload(file);
      this.upSvc.pushUpload(this.currentUpload);
      this.ResetForm();

    } else {
      this.currentUpload = this.fileForm.value;
      this.currentUpload.key = this.id;
      console.log('upload single =' + this.currentUpload.comentario);
      this.upSvc.update(this.currentUpload)
      .then(() => {
        this.messages = `Projeto Atulizado com sucesso!`;
        this.fileForm.reset();
      })
      .catch((erro) => { this.messages = `Erro ao atualizar o projeto: ${erro}` })

      this.arquivosService.deleteUpdate(this.update);

      const file = this.selectedFiles.item(0);
      this.currentUpload = new Upload(file);

      let uploadTask = this.upSvc.uploadFile(this.currentUpload);

      uploadTask.on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {


        this.currentUpload.progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.cd.detectChanges();
        this.currentUpload.name = file.name;
        this.currentUpload.key = this.id;


      }, (error: Error) => {

      });

      uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {

        this.currentUpload.url = uploadTask.snapshot.downloadURL
        console.log('url novo update =' + this.currentUpload.url);
        console.log('name novo update =' + this.currentUpload.name);

      this.upSvc.update(this.currentUpload)
      .then(() => {
        this.messages = `Projeto Atulizado com sucesso!`;
        this.fileForm.reset();


      })
      .catch((erro) => { this.messages = `Erro ao atualizar o projeto: ${erro}` })

      });

      this.fileForm.reset();


    }
  }

  onFile(event): void {
     this.file = event.target.files[0];
  }
  editProject(p: Upload) {
    this.update = p;
    console.log("teste update =" + this.update.name)
    this.edit = true;
    this.id = p.key
     this.fileForm.controls['comentario'].setValue(p.comentario);
    console.log('metodo edite = '+ p.comentario + p.key )

  }
}

