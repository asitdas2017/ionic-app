import {Component} from '@angular/core';
import {} from 'ionic-angular';

@Component({
  selector: 'page-news', 
  templateUrl: 'news.html'
})
export class NewsPage {
  iniNewsTab : string = "top";
  public showflip1 = false;
  constructor() {}
}