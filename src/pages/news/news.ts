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
  template: `
  <ion-header>
  <ion-toolbar>
      <ion-title>
          Details
      </ion-title>
      <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <span ion-text showWhen="ios">Back</span>
            <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
          </button>
      </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>


  <ion-card class="news-details">
      <div class="details-img"><img src="{{character.image}}"></div>
      <h6>{{character.newsTitle}}</h6>
      <ion-item>
          <span item-left><span class="green">CNBC News</span> - 1h ago</span>
          <button ion-button clear item-end>
              <ion-icon name="bookmark"></ion-icon>                  
          </button>
          <button ion-button clear item-end>
              <ion-icon name="cloud-download"></ion-icon>                        
          </button>
          <button ion-button clear item-end>
              <ion-icon name="share-alt"></ion-icon>                        
          </button>
      </ion-item>
      <div class="details-copy">
          <p>Lorem ipsum dolor sit amet, autem epicuri expetenda ei est, ad mei alia soluta, pro an quem regione meliore. Mundi fabulas similique sit cu, an summo consul eos, eu consulatu reprimique conclusionemque eos. Agam legimus inermis sed no, eam
              etiam graeci appareat no, usu et labitur accusamus accommodare. Odio dolorum no sit, id mea tantas omittam moderatius, atqui splendide ea sea. At nisl habemus iudicabit mea, ex iusto aliquam accusata sea. Cu postea alterum vix, ea mea
              veri justo. Mei cu causae forensibus adipiscing, pri option suscipit et, ridens oporteat ei his. Per in iuvaret dignissim, ei homero cetero ceteros vix, agam accusamus cu usu. Ne doming percipit vim, ullum summo petentium et nam. Ex debet
              doctus audire mei. At fabulas pericula interesset pro, in pri sale nulla accommodare.
              <br><br> Lorem ipsum dolor sit amet, autem epicuri expetenda ei est, ad mei alia soluta, pro an quem regione meliore. Mundi fabulas similique sit cu, an summo consul eos, eu consulatu reprimique conclusionemque eos. Agam legimus inermis
              sed no, eam etiam graeci appareat no, usu et labitur accusamus accommodare. Odio dolorum no sit, id mea tantas omittam moderatius, atqui splendide ea sea. At nisl habemus iudicabit mea, ex iusto aliquam accusata sea. Cu postea alterum
              vix, ea mea veri justo. Mei cu causae forensibus adipiscing, pri option suscipit et, ridens oporteat ei his. Per in iuvaret dignissim, ei homero cetero ceteros vix, agam accusamus cu usu. Ne doming percipit vim, ullum summo petentium et
              nam. Ex debet doctus audire mei. At fabulas pericula interesset pro, in pri sale nulla accommodare.
              <br><br> Lorem ipsum dolor sit amet, autem epicuri expetenda ei est, ad mei alia soluta, pro an quem regione meliore. Mundi fabulas similique sit cu, an summo consul eos, eu consulatu reprimique conclusionemque eos. Agam legimus inermis
              sed no, eam etiam graeci appareat no, usu et labitur accusamus accommodare. Odio dolorum no sit, id mea tantas omittam moderatius, atqui splendide ea sea. At nisl habemus iudicabit mea, ex iusto aliquam accusata sea. Cu postea alterum
              vix, ea mea veri justo. Mei cu causae forensibus adipiscing, pri option suscipit et, ridens oporteat ei his. Per in iuvaret dignissim, ei homero cetero ceteros vix, agam accusamus cu usu. Ne doming percipit vim, ullum summo petentium et
              nam. Ex debet doctus audire mei. At fabulas pericula interesset pro, in pri sale nulla accommodare.</p>
      </div>
  </ion-card>
</ion-content>
  `
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
