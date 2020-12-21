import { NgModule, CUSTOM_ELEMENTS_SCHEMA   } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { CustomLoggedHeaderComponentModule } from '../../components/custom-logged-header/custom-logged-header.component.module';
import { CapitalizePipeModule } from '../../pipes/capitalize.pipe.module';



@NgModule({
  declarations: [
    HomePage,


     ],
  imports: [
    IonicPageModule.forChild(HomePage),
    CustomLoggedHeaderComponentModule,
    CapitalizePipeModule


  ],
  entryComponents: [HomePage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class HomePageModule {}
