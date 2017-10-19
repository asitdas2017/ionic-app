import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-magazine',
  templateUrl: 'magazine.html'
})
export class magazinePage {

  private showMagazineList =true;
  public showflip =false;
  constructor(public navCtrl: NavController) {

  }

}
