import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livres.service';
import { LendBookPage } from './lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  
  livreList: Livre[];

  constructor(private modalCtrl: ModalController,
              private livreS: LivreService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.livreList = this.livreS.livreList.slice();
  }

  onLoadLivre(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
