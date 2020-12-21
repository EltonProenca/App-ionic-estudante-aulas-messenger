import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-detailnote',
  templateUrl: 'detailnote.html'
})
export class DetailnotePage {

   notes: Array<string>;
   note: string;
   index: number;

  constructor(public navCtrl: NavController, public storage: Storage,
      public navParams: NavParams) {
        this.notes = this.navParams.get('notes');
        this.index = this.navParams.get('index');

        if (this.index == this.notes.length) {
            this.note = ""
        }
        else {
            this.note = this.notes[this.index];
        }
  }

  saveNote() {

      this.notes[this.index] = this.note;
      this.storage.ready().then(() => {
          this.storage.set('notes', this.notes);
          this.navCtrl.pop();
      });
  }
}
