import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisciplinasgeralPage } from './disciplinasgeral';

@NgModule({
  declarations: [
    DisciplinasgeralPage,
  ],
  imports: [
    IonicPageModule.forChild(DisciplinasgeralPage),
  ],
  entryComponents: [DisciplinasgeralPage]
})
export class DisciplinasgeralPageModule {}
