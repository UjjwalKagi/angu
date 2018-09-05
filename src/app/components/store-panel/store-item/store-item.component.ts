import { Component, OnInit } from '@angular/core';
import { Items } from '../../../model/items';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

  data: any;
  item: Items[];
  constructor(private _product: HomeService) { }

  ngOnInit() {
    this.showAllProduct();
  }

  showAllProduct(){

    this._product.listProduct().subscribe(data => {

      console.log('Items', this.data);
      this.item = data;
      console.log('Item',this.item);
    },
      error => {
        console.log('Item Error', error)
      } );
    }

  
}
