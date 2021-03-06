import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { FacscoProvider } from '../../providers/facsco/facsco';

import { OrdersPage } from '../orders/orders';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;

  constructor(public navCtrl: NavController, public http: HttpClient, public facsco: FacscoProvider) {

  }

  login() {
  	this.http.post(
  		"http://104.236.73.253/login/", 
  		{
  			"username": this.username, 
  			"password": this.password
  		}
	).subscribe((response) => {
		this.facsco.setToken(response['token']);
		this.navCtrl.insert(0, OrdersPage);
		this.navCtrl.popToRoot();
	});
  }

}
