import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserProfilePage } from './user-profile';
import { CustomLoggedHeaderComponentModule } from '../../components/custom-logged-header/custom-logged-header.component.module';
import { UserInfoComponentModule } from '../../components/user-info/user-info.component.module';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.component.module';


@NgModule({
  declarations: [
    UserProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(UserProfilePage),
    UserInfoComponentModule,
    CustomLoggedHeaderComponentModule,
    ProgressBarComponentModule
   ],
  entryComponents: [UserProfilePage]
})
export class UserProfilePageModule {}

