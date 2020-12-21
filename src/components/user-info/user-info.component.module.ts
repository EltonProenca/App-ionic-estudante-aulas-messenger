import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInfoComponent } from './user-info.component';


@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    IonicPageModule.forChild(UserInfoComponent),
  ],
  entryComponents: [UserInfoComponent],

  exports:[
    UserInfoComponent
  ]
})
export class UserInfoComponentModule {}
