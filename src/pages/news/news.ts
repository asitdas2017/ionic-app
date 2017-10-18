import {Component} from '@angular/core';
import {NavController, ModalController, Platform, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-news', 
  templateUrl: 'news.html'
})
export class NewsPage {
  iniNewsTab : string = "top";
  constructor(public navCtrl : NavController, public modalCtrl : ModalController) {}

  openModal(characterNum) {

    let modal = this
      .modalCtrl
      .create(ModalContentPage, characterNum);
    modal.present();
  }

}

@Component({
  templateUrl: 'news-details.html'
})
export class ModalContentPage {
  character;
  constructor(public platform : Platform, public params : NavParams, public viewCtrl : ViewController) {
    var characters = [
      {
        newsTitle: 'Odio dolorum no sit, id mea tantas omittam moderatius, atqui splendide easea.',
        image: '../../assets/images/news-01.jpg'        
      }, {
        newsTitle: 'Lorem ipsum dolor sit amet, autem epicuri expetenda ei est, ad mei alia soluta, pro an quem regione meliore.',
        image: '../../assets/images/news-02.jpg'
      }, {
        newsTitle: 'Causae forensibus adipiscing, pri option suscipit et, ridens oporteat ei his. Per in iuvaret dignissim.',
        image: '../../assets/images/news-03.jpg'
      }
      , {
        newsTitle: 'Mundi fabulas similique sit cu, an summo consul eos, eu consulatu reprimique conclusionemque eos. Agam legimus inermis graeci appareat.',
        image: '../../assets/images/news-04.jpg'
      }
      , {
        newsTitle: 'Fabulas pericula interesset pro, in pri sale nulla accommodare pri option suscipit et, ridens oporteat',
        image: '../../assets/images/news-05.jpg'
      }
    ];
    this.character = characters[
      this
        .params
        .get('charNum')
    ];
  }
  dismiss() {
    this
      .viewCtrl
      .dismiss();
  }
}
