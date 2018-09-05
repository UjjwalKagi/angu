import { Component, OnInit } from '@angular/core';
import { Customerorder } from '../../../model/customerorder';
import { OrderService } from '../../../services/order.service';
import { MyitemsService } from '../../../services/myitems.service';

@Component({
  selector: 'app-store-deliver',
  templateUrl: './store-deliver.component.html',
  styleUrls: ['./store-deliver.component.css']
})
export class StoreDeliverComponent implements OnInit {

  data:any;
  order:Customerorder[];
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private itemService:MyitemsService) { }

  ngOnInit() {
    this.listAllDeliverOrderByStore();
  }

  listAllDeliverOrderByStore() {
    this.itemService.listAllDeliverOrderByStore().subscribe(data => {

      console.log('order', this.data);
      this.data = data;
      this.order=this.data;
      console.log('order', this.order);
    },
      error => {
        console.log('Order Error', error)
      });

  }

  deleteOrder(id:number){
    this.itemService.deleteOrder(id).subscribe(data => {
      this.listAllDeliverOrderByStore();
    },
      error => {
        console.log('Delete Error', error)
      });


}


}
