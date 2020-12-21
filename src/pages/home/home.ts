import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-Home',
  templateUrl: 'Home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthService,
    public menuCtrl: MenuController
    ) {
  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.menuCtrl.enable(true, 'user-menu');
  }
  onProfile(): void {
    const alert = this.alertCtrl.create({
      title: 'Olá Aluno',
      subTitle: 'Você está na pagina de mensagens!!',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.setRoot("HomePage");
  }

  onNotas(): void {
    this.navCtrl.push("NotasPage");
  }
  onFrequencia(): void {
    this.navCtrl.push("FrequenciaPage");
  }

  onDisciplinas(): void {
    this.navCtrl.push("DisciplinasgeralPage");
  }

  onAtividades(): void {
    this.navCtrl.push("AcompatividadesPage");
  }
  showEventsList() {
    this.navCtrl.push("EventListPage");
  }

}
