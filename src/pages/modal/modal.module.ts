import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@NgModule({  
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
  declarations: [
    ModalPage,
  ]
})
export class ModalPageModule {}
