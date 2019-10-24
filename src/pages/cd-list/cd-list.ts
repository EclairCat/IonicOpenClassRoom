import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Cd } from '../../models/cd';
import { CdsService } from '../../services/cds.service';
import { LendCdPage } from './lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Cd[];

  constructor(private modalCtrl: ModalController,
              private CdS: CdsService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.cdList = this.CdS.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
