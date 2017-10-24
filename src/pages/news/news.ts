import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';

@Component({
  selector: 'page-news', 
  templateUrl: 'news.html'
})
export class NewsPage {
  iniNewsTab : string = "top";
  public showflip1 = false;
  constructor(private modalCtrl: ModalController) {}

  openModal(){
    const myModal = this.modalCtrl.create('ModalPage');
    myModal.present();
  }
}