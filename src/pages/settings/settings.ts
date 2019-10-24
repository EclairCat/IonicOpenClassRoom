import { Component } from '@angular/core';
import { AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private alertCtrl: AlertController,
    private menuCtrl: MenuController) {}

  onToggleLights() {
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action vous fera perdre toute vos donnée... !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => {
            console.log('Confirmé !');
            alert2.present();
          }          
        }
      ]
    });
    alert.present();

    let alert2 = this.alertCtrl.create({
      subTitle: 'SIKE IT WAS THE WRONG NUMBER!',
      buttons: [
        {
          text: 'Ah...',
          role: 'cancel'
        }
      ]
    });

  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}