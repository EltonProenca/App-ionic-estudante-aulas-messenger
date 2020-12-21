import { Component, Input } from '@angular/core';
import { AlertController, App, MenuController } from 'ionic-angular';
import { AuthService } from './../../providers/auth.service';
import { BaseComponent } from "../base.component";
import { User } from './../../models/user.model';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.component.html'
})
export class UserMenuComponent extends BaseComponent {

  @Input('user') currentUser: User;

  constructor(
    public alertCtrl: AlertController,
    public authService: AuthService,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, authService, app, menuCtrl);
  }

  onHome(): void {
    this.navCtrl.setRoot("HomePage");
  }
  onDisciplinas(): void {
    this.navCtrl.setRoot("DisciplinasgeralPage");
  }
  onCalendario(): void {
    this.navCtrl.setRoot("CalendarioPage");
  }
  onMensagens(): void {
    this.navCtrl.setRoot("MessengerPage");
  }
  onListaCalendario(){
    this.navCtrl.push("EventListPage");
  }
  onFrequencia(): void {
    this.navCtrl.setRoot("FrequenciaPage");
  }
  onArquivos(): void {
    this.navCtrl.setRoot("ArquivosPage");
  }
  onNotas(): void {
    this.navCtrl.setRoot("NotasPage");
  }
  onProfile(): void {
    this.navCtrl.push("UserProfilePage");
  }

}
