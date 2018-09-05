import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Store } from '../../../model/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  data:any;
  store:Store[];
  constructor(private storeService:StoreService) { }

  ngOnInit() {
    this.listAllStore();
  }

  listAllStore() {
    this.storeService.listAllStore().subscribe(data => {

      console.log('Store', this.data);
      this.data = data;
      this.store=this.data;
      console.log('Store', this.store);
    },
      error => {
        console.log('Store Error', error)
      });

  }

  deleteStore(id:number){
    this.storeService.deleteStore(id).subscribe(data => {
      this.listAllStore();
    },
      error => {
        console.log('user Error', error)
      });


}
}
