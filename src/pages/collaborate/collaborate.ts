import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({selector: 'page-collaborate', templateUrl: 'collaborate.html'})
export class CollaboratePage {
  public showdetails = false
  public showchat = true
  chatBox: any;
  constructor(public navCtrl: NavController) {
    this.chatBox = "";
    //this.messages = [];
  }

  public messages = [
    {
      img: '../../assets/icon/blueman.png',
      position: 'right',
      content: 'Hello please send me my account details.',
      senderName: 'Me',
      time: '16-Aug-2017 21:53'
    },
    {
      img: '../../assets/icon/grayman.png',
      position: 'left',
      content: 'Hi! here is your account details. xxxx-xxxx',
      senderName: 'John',
      time: '16-Aug-2017  21:55'
    },
    {
      img: '../../assets/icon/blueman.png',
      position: 'right',
      content: "Thanks",
      senderName: 'Me',
      time: '16-Aug-2017  21:57'
    }
  ];

  send(message) {
    alert('ZX');
    if (message && message != "") {
      this.messages.push(message);
    }
    this.chatBox = "";
  }

}
