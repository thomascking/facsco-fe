import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FacscoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacscoProvider {
  token: string = "";
  header: HttpHeaders = new HttpHeaders();

  constructor(public http: HttpClient) {
  }

  setToken(token: string) {
  	this.token = token;
  	this.header = this.header.set("Authorization", "Token " + token);
  }

  getProducts() {
  	return this.http.get("http://104.236.73.253:8000/products/", {headers: this.header});
  }

  submitOrder(orderDetails) {
  	return this.http.post("http://104.236.73.253:8000/order/", orderDetails, {headers: this.header})
  }
}
