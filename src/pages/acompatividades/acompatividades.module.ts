import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompatividadesPage } from './acompatividades';

@NgModule({
  declarations: [
    AcompatividadesPage,
  ],
  imports: [
    IonicPageModule.forChild(AcompatividadesPage),
  ],
  entryComponents: [AcompatividadesPage]
})
export class AcompatividadesPageModule {}
