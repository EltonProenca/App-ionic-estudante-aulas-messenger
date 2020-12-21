import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserMenuComponent } from './user-menu.component';
import { UserInfoComponentModule } from '../user-info/user-info.component.module';



@NgModule({
  declarations: [
    UserMenuComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserMenuComponent),
    UserInfoComponentModule
  ],
  exports:[
    UserMenuComponent
  ]
})
export class UserMenuComponentModule {}
