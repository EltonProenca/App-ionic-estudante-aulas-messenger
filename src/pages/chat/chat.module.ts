import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { MessageBoxPageModule } from '../../components/message-box/message-box.component.module';
import { CustomLoggedHeaderComponentModule } from '../../components/custom-logged-header/custom-logged-header.component.module';


@NgModule({
  declarations: [
    ChatPage,

  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    MessageBoxPageModule,
    CustomLoggedHeaderComponentModule



  ],
  entryComponents: [ChatPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class ChatPageModule {}
