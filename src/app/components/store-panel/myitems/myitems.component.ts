import { Component, OnInit } from '@angular/core';
import { Items } from '../../../model/items';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import { ItemsService } from '../../../services/items.service';
import { MyitemsService } from '../../../services/myitems.service';

@Component({
  selector: 'app-myitems',
  templateUrl: './myitems.component.html',
  styleUrls: ['./myitems.component.css']
})
export class MyitemsComponent implements OnInit {

  item: Items[];
  submitted = false;
  error:boolean;
  message:string;
  data:any;
  constructor(private itemService:MyitemsService) { }

  ngOnInit() {
    this.onSubmit
  }

  onSubmit(form: NgForm){
    console.log("value",form.value)
    return this.itemService.createStoreItem(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
       this.message=data['messsage'];
       form.reset();
       swal(this.message, " " , "success");
       
     }, error => {
      this.error = true;
      if (error.error['message']) {
        this.message = error.error['message'];
        swal(this.message, " " , "error");
        
      }
      else {
        this.message = error.message;
      }

    }); 
  }


}
