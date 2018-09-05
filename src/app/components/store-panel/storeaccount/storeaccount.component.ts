import { Component, OnInit } from '@angular/core';
import { Store } from '../../../model/store';
import { MyitemsService } from '../../../services/myitems.service';

@Component({
  selector: 'app-storeaccount',
  templateUrl: './storeaccount.component.html',
  styleUrls: ['./storeaccount.component.css']
})
export class StoreaccountComponent implements OnInit {

  data:any;
  store:Store;
  submitted = false;
  success: boolean = false;
  error: boolean = false;
  message:string;
  constructor(private storeService:MyitemsService) { }

  ngOnInit() {
    this.listAnStore();
  }

  listAnStore(){
    this.storeService.listAnStore().subscribe(data => {

      console.log('store', this.data);
      this.data = data;
      this.store=this.data
      console.log('store', this.store);
    },
      error => {
        console.log('user Error', error)
      });
  }
  }


