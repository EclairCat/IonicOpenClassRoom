import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Livre } from '../../../models/livre';
import { LivreService } from '../../../services/livres.service';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  livre: Livre;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public livreService: LivreService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.livre = this.livreService.livreList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLivre() {
    this.livre.isGiven = !this.livre.isGiven;
  }
}
