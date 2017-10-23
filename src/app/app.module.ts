import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { CollaboratePage } from '../pages/collaborate/collaborate';
import { magazinePage } from '../pages/magazine/magazine';
import { notificationPage } from '../pages/notifications/notifications';
import { ChartModule } from 'angular2-highcharts';
import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgmCoreModule } from '@agm/core';
declare var require: any;


// Initialize Firebase
const firebaseAuth = {
  apiKey: "AIzaSyCcqmeHkYKUjDA3OQcoMgC2CCqUQ6zig08",
  authDomain: "ionic-app-183202.firebaseapp.com",
  databaseURL: "https://ionic-app-183202.firebaseio.com",
  projectId: "ionic-app-183202",
  storageBucket: "ionic-app-183202.appspot.com",
  messagingSenderId: "1034954577744"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    NewsPage,
    CollaboratePage,
    magazinePage,
    notificationPage
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC75mpaf-PgaDKUqyZwkheoOJJrKjdEhJI'
    }),
    ChartModule.forRoot(require('highcharts')),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    NewsPage,
    CollaboratePage,
    magazinePage,
    notificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
