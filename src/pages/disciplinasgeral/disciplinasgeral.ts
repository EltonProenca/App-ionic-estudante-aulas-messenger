import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController   } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user.service';
import { SetService } from '../../providers/services-curso/set.service';


/**
 * Generated class for the DisciplinasgeralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplinasgeral',
  templateUrl: 'disciplinasgeral.html',
})
export class DisciplinasgeralPage {
  notes: Array<string>;
  condensedNotes: Array<string> = new Array();
  shortener: 30;
  deleteMode: false;

  currentUser: User;
  basepath: any;
  basepathProf: any;
  curso: String;
  materia0: string;
  materia1: string;
  materia2: string;
  materia3: string;
  materia4: string;
  materia5: string;
  materia6: string;
  materia7: string ;
  public usuarioAluno: String = 'aluno';
  basepathUsers: void;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     public storage: Storage,
     public alerCtrl: AlertController,
     public userService: UserService,
     public setService: SetService

     ) {
    this.refreshList();
  }


 ionViewDidLoad() {
    console.log('ionViewDidLoad DisciplinasgeralPage');
    this.userService
    .mapObjectKey<User>(this.userService.currentUser)
    .subscribe((user: User) => {
      this.currentUser = user;
      this.curso = user.curso;
      this.materia0 = user.Materia0;
      this.materia1 = user.Materia1;
      this.materia2 = user.Materia2;
      this.materia3 = user.Materia3;
      this.materia4 = user.Materia4;
      this.materia5 = user.Materia5;
      this.materia6 = user.Materia6;
      this.materia7 = user.Materia7;

    });

  }


  onDisciplina0(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria0);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria0);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria0);
    this.setService.setPathMateria(this.currentUser.Materia0);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria0);


    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina1(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria1);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria1);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria1);
    this.setService.setPathMateria(this.currentUser.Materia1);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria1);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina2(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria2);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria2);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria2);
    this.setService.setPathMateria(this.currentUser.Materia2);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria2);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina3(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria3);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria3);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria3);
    this.setService.setPathMateria(this.currentUser.Materia3);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria3);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina4(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria4);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria4);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria4);
    this.setService.setPathMateria(this.currentUser.Materia4);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria4);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina5(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria5);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria5);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria5);
    this.setService.setPathMateria(this.currentUser.Materia5);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria5);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina6(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria6);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria6);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria6);
    this.setService.setPathMateria(this.currentUser.Materia6);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria6);

    this.navCtrl.push("Disciplina1Page")
  }
  onDisciplina7(): void{
    this.basepath = this.setService.setPath(this.currentUser.pathMateria7);
    this.basepathProf = this.setService.setPathProf(this.currentUser.pathMateria7);
    this.basepathUsers = this.setService.setPathUsers(this.currentUser.pathMateria7);
    this.setService.setPathMateria(this.currentUser.Materia7);
    this.setService.setExtras(this.currentUser.usuario);
    this.setService.setId(this.currentUser.$key);
    this.setService.setIdProf(this.currentUser.pathProfMateria7);

    this.navCtrl.push("Disciplina1Page")
  }


  noteTapped(note: string) {
    var index;
    if(this.deleteMode){
        this.confirmDeletion(note)
    }
    else{
      for (var i=0;i<this.notes.length;i++) {
          if (this.notes[i].substring(0, this.shortener) + "..." === note) {
              index = i;
              break;
          }
      }

      this.navCtrl.push("DetailnotePage", {
          notes: this.notes,
          index: index
      })
    }

}

refreshList() {
    this.storage.ready().then(() => {
        this.storage.get('notes').then((result) => {
            result ? this.notes = result : this.notes = ['Welcome to Notes!'];
            this.sanitizeList();
        })
    });
}

sanitizeList() {
    if (this.notes!=undefined){
      this.condensedNotes = []
      for (var i=0; i<this.notes.length;i++) {
          this.condensedNotes[i] = this.notes[i].substring(0, this.shortener) + "...";
      }
    }
}

newNote() {
    let idx = this.notes.length
    this.navCtrl.push("DetailnotePage", {
        notes: this.notes,
        index: idx
    })
}
deleteNote(note) {
    var index = this.condensedNotes.indexOf(note);
    if (index >= 0) {
      this.notes.splice( index, 1 );
      this.storage.ready().then(() => {
        this.storage.set('notes', this.notes);
        this.refreshList();
        this.sanitizeList();
      });
    }
}
confirmDeletion(note) {
    let confirm = this.alerCtrl.create({
    title: 'Você gostaria de apgar sua anotação?',
    message: 'Não poderá reverter!',
    buttons: [
      {
        text: 'Apagar',
        handler: () => {
          this.deleteNote(note)
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
        }
      }
    ]
  });
  confirm.present()
}
ionViewWillEnter() {
    this.refreshList();
}






}
