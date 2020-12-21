import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DetailnotePage } from './detailnote';


@NgModule({
  declarations: [
    DetailnotePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailnotePage),
  ],
  entryComponents: [DetailnotePage]
})
export class DetailnotePageModule {}
