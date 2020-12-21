import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageBoxComponent } from './message-box.component';


@NgModule({
  declarations: [
    MessageBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(MessageBoxComponent),
  ],
  entryComponents: [MessageBoxComponent],
  exports: [
    MessageBoxComponent
  ]
})
export class MessageBoxPageModule {}
