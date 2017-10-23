import { Component } from '@angular/core';
import { NewsPage } from '../news/news';
import { CollaboratePage } from '../collaborate/collaborate';
import { HomePage } from '../home/home';
import { magazinePage } from '../magazine/magazine';
import { notificationPage } from '../notifications/notifications';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  constructor() {}

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = CollaboratePage;
  tab4Root = magazinePage; 
  tab5Root = notificationPage;   
  
}
