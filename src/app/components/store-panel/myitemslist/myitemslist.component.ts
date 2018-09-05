import { Component, OnInit } from '@angular/core';
import { Items } from '../../../model/items';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { ItemsService } from '../../../services/items.service';
import { MyitemsService } from '../../../services/myitems.service';
@Component({
  selector: 'app-myitemslist',
  templateUrl: './myitemslist.component.html',
  styleUrls: ['./myitemslist.component.css']
})
export class MyitemslistComponent implements OnInit {

  item: Items[];
  submitted = false;
  error:boolean;
  message:string;
  data:any;
  constructor(private itemService:MyitemsService) { }

  ngOnInit() {
    this.listAllMyItems();
  }


  listAllMyItems(){
    this.itemService.listAllMyItems().subscribe(data => {

      console.log('Items', this.data);
      this.data = data;
      this.item=this.data;
      console.log('item',this.item);
    },
      error => {
        console.log('Items Error', error)
      }
    );
  }

}
