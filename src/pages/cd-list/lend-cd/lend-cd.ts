import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { Cd } from '../../../models/cd';
import { CdsService } from '../../../services/cds.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public CdS: CdsService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.CdS.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleCd() {
    this.cd.isGiven = !this.cd.isGiven;
  }
}
