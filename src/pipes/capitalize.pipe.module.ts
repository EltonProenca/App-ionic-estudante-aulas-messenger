import { NgModule, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapitalizePipe } from './capitalize.pipe';




@NgModule({
  declarations: [
    CapitalizePipe,

     ],
  imports: [
    IonicPageModule.forChild(CapitalizePipe),
  ],
  exports: [
    CapitalizePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class CapitalizePipeModule {}
