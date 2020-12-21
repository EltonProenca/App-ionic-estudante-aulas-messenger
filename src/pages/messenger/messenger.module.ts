import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessengerPage } from './messenger';
//import { CustomLoggedHeaderComponent } from '../../components/custom-logged-header/custom-logged-header.component';
//import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { CustomLoggedHeaderComponentModule } from '../../components/custom-logged-header/custom-logged-header.component.module';
import { CapitalizePipeModule } from '../../pipes/capitalize.pipe.module';

@NgModule({
  declarations: [
    MessengerPage


  ],
  imports: [
    IonicPageModule.forChild(MessengerPage),
    CustomLoggedHeaderComponentModule,
    CapitalizePipeModule
  ],
  entryComponents: [MessengerPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class MessengerPageModule {}
