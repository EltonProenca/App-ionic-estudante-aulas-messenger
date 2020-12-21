import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';
import { HomePage } from '../home/home';
import { NotasPage } from '../notas/notas';
import { FrequenciaPage } from '../frequencia/frequencia';
import { DisciplinasgeralPage } from '../disciplinasgeral/disciplinasgeral';
import { AcompatividadesPage } from '../acompatividades/acompatividades';
import { EventListPage } from '../event-list/event-list';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthService,
    public menuCtrl: MenuController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  onProfile(): void {
    const alert = this.alertCtrl.create({
      title: 'Olá Aluno',
      subTitle: 'Você está na pagina de mensagens!!',
      buttons: ['OK']
    });
    alert.present();

    this.navCtrl.setRoot(HomePage);
  }

  onNotas(): void {
    this.navCtrl.push(NotasPage);
  }
  onFrequencia(): void {
    this.navCtrl.push(FrequenciaPage);
  }

  onDisciplinas(): void {
    this.navCtrl.push(DisciplinasgeralPage);
  }

  onAtividades(): void {
    this.navCtrl.push(AcompatividadesPage);
  }
  showEventsList() {
    this.navCtrl.push(EventListPage);
  }

}
