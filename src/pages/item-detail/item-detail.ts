import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  share(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A//www.facebook.com/SushiBlog/');
  }

  location(street){
  	console.log(street);
  	window.open('https://www.google.com/maps/place/'+street);
  }

}
