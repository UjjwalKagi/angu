import { Component, OnInit } from '@angular/core';
import { Items } from '../../../model/items';
import { HomeService } from '../../../services/home.service';
import { ItemsService } from '../../../services/items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  data: any;
  item: Items[];
  constructor(private _product: HomeService,private itemsService:ItemsService) { 
  }

  ngOnInit() {
    this.showAllProduct();
  }
  showAllProduct(){

    this._product.listProduct().subscribe(data => {

      console.log('Gallery', this.data);
      this.item = data;
      console.log('gal',this.item);
    },
      error => {
        console.log('Gellery Error', error)
      });

  }

  deleteItem(id:number){
    this.itemsService.deleteItem(id).subscribe(data => {
      this.showAllProduct();
    },
      error => {
        console.log('user Error', error)
      });


}

}
