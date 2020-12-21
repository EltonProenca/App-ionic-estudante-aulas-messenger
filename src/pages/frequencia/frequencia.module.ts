import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrequenciaPage } from './frequencia';

@NgModule({
  declarations: [
    FrequenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(FrequenciaPage),
  ],
  entryComponents: [FrequenciaPage]
})
export class FrequenciaPageModule {}
