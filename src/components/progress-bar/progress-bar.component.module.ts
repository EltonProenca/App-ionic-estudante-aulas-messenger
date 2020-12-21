import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './progress-bar.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProgressBarComponent),
  ],
  entryComponents: [ProgressBarComponent],
  exports:[
    ProgressBarComponent
  ]
})
export class ProgressBarComponentModule {}
