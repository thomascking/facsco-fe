import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { FacscoProvider } from '../../providers/facsco/facsco';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  groups: any;
  selected: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facsco: FacscoProvider) {
  }

  ionViewDidLoad() {
    this.facsco.getProducts().subscribe((data) => {
      this.groups = data;
      console.log(this.groups);
    });
  }

  submitOrder(orderForm: NgForm) {
    console.log('submitting order');
    var orderDetails: any = {
      po: orderForm.value['po'] || "",
      notes: orderForm.value['notes'] || ""
    };
    delete orderForm.value['po']; delete orderForm.value['notes'];
    orderDetails['products'] = [];
    for (var product_number in orderForm.value) {
      var q = parseInt(orderForm.value[product_number]);
      orderDetails['products'].push({
        number: product_number,
        quantity: isNaN(q) ? 0 : q
      });
    }
    console.log(orderDetails);
    if (orderDetails['products'].length > 0) {
      this.facsco.submitOrder(orderDetails).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
