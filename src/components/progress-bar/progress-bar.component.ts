import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html'
})
export class ProgressBarComponent {

  @Input() progress: number;

  constructor() {}

}
