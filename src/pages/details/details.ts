import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FacscoProvider } from '../../providers/facsco/facsco';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  pk: number;
  order: Object;
  products: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facsco: FacscoProvider) {
  	this.pk = navParams.get('pk');
  }

  ionViewDidLoad() {
    this.facsco.getOrder(this.pk).subscribe((data) => {
      this.order = data;
      this.products = this.order['products'];
      console.log(this.order);
    });
  }

}
