import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { CalendarModule } from 'angular-calendar';
import { CalendarService } from '../providers/calendar/calendar.service';
import { ToastService } from '../providers/calendar/toast.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './../providers/auth.service';

import { ChatService } from './../providers/chat.service';
import { MessageService } from './../providers/message.service';
import { MyApp } from './app.component';
import { UserService } from './../providers/user.service';
import { IonicStorageModule } from '@ionic/storage';
import { UploadServiceProvider } from '../providers/upload-service/upload-service';
import { SetService } from '../providers/services-curso/set.service';
import { ExtraService } from '../providers/extra.service';
import { CursoService } from '../providers/services-curso/curso.service';
import { CustomLoggedHeaderComponentModule } from '../components/custom-logged-header/custom-logged-header.component.module';
import { MessageBoxPageModule } from '../components/message-box/message-box.component.module';
import { CapitalizePipeModule } from '../pipes/capitalize.pipe.module';
import { UserInfoComponentModule } from '../components/user-info/user-info.component.module';
import { ProgressBarComponentModule } from '../components/progress-bar/progress-bar.component.module';
import { UserMenuComponentModule } from '../components/user-menu/user-menu.component.module';





const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDYfYX9pO7mHbaHVRv5eVqiiWWVkwp-FAE",
  authDomain: "files-47adb.firebaseapp.com",
  databaseURL: "https://files-47adb.firebaseio.com",
  projectId: "files-47adb",
  storageBucket: "files-47adb.appspot.com",
  messagingSenderId: "314068750205"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CalendarModule.forRoot(),
    IonicStorageModule.forRoot(),
    CustomLoggedHeaderComponentModule,
    MessageBoxPageModule,
    CapitalizePipeModule,
    UserInfoComponentModule,
    ProgressBarComponentModule,
    UserMenuComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AuthService,
    ChatService,
    MessageService,
    StatusBar,
    SplashScreen,
    UserService,
    Calendar,
    CalendarService,
    ToastService,
    UploadServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursoService,
    SetService,
    ExtraService
  ]
})
export class AppModule {}
