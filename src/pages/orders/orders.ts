import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListPage } from '../list/list';
import { DetailsPage } from '../details/details';
import { FacscoProvider } from '../../providers/facsco/facsco';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  orders: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facsco: FacscoProvider) {
  }

  ionViewDidLoad() {
    this.facsco.getOrders().subscribe((data) => {
      this.orders = data;
      for (var i = 0; i < this.orders.length; i++) {
      	this.orders[i].submitted = new Date(this.orders[i].submitted).toLocaleString();
      }
      console.log(this.orders);
    });
  }

  newOrder() {
  	this.navCtrl.push(ListPage);
  }

  details(pk: number) {
  	this.navCtrl.push(DetailsPage, {pk: pk});
  }

}
