import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomLoggedHeaderComponent } from './custom-logged-header.component';


@NgModule({
  declarations: [
    CustomLoggedHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild( CustomLoggedHeaderComponent),
  ],
  entryComponents: [ CustomLoggedHeaderComponent],
  exports: [
    CustomLoggedHeaderComponent
  ]
})
export class CustomLoggedHeaderComponentModule {}
