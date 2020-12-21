
import { Periodo } from '../../models/conteudo/periodo.model';
import { Curso } from '../../models/conteudo/curso.model';
import { Injectable } from '@angular/core';
import { Disciplina } from '../../models/conteudo/disciplina.model';
import { Upload } from '../../models/upload.model';
import { Path } from '../../models/conteudo/path.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Injectable()
export class CursoService {
  userRef: any;
  public currentUserUid: string;
  public currentCurso: string;
  path: Path;
  public pathList: string;




  constructor(  public fireDatabase: AngularFireDatabase, public angularFireAuth: AngularFireAuth,

    ) {
      this.currentUserUid = this.angularFireAuth.auth.currentUser.uid;
     }


   public selectedSubject(course: string, period: string, id: string): any {
    return this.fireDatabase.database.ref(`ListaDeCurso/${course}/${period}/${id}`).once('value');
  }


  public setSubjectDataToDatabase(curso: Curso, periodo: Periodo, disciplina: Disciplina) {
    return new Promise((resolve, reject) => {

    this.fireDatabase.list(`ListaDeCurso/${curso}/${periodo}`).push({
     name: disciplina}
    ).then((data) => {
      console.log('key da disciplina' + data.key);
      resolve(data.ref); {}
    });

  });
  }
  public setSubjectDataToDatabase2( path: Path, uuid: string ) {
    this.fireDatabase.list(`PathDisciplinas/`).push({
      key: uuid,
      curso: path.curso,
      periodo: path.periodo,
      materia: path.materia
    });
  }
  getAllAlunos() {
    console.log('teste seriço2');
    console.log(this.currentUserUid);
    return this.fireDatabase.list<Upload>(`Análise e desenvolvimento de sistemas/Primeiro/-Ls0H0FCWQDO8ifQTo-w/${this.currentUserUid}`)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }
  getAll() {
    console.log('teste seriço2');
    console.log(this.currentUserUid);
    return this.fireDatabase.list<Path>(`PathDisciplinas/`,
    ref => ref.orderByChild('curso'))
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }


 /* public updateSubject(idSubject: string, course: string, period: string, subject: string): any {
    this.fireDatabase.database.ref(`ListCurso/${course}/${period}/${idSubject}`).update({
      subjectName: subject
    }).then(() => {
      // this.toastr.success('Disciplina alterada com sucesso.', 'Ok', {
       // timeOut: 3000
     // });
    }).catch(() => {
     // this.toastr.error('Erro ao alterar diciplina.', 'Ko', {
     //   timeOut: 3000
     /// });
    });
  }*/
}
