import { Component, OnInit } from '@angular/core';
import { Store } from '../../../model/store';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { StoreService } from '../../../services/store.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MyitemsService } from '../../../services/myitems.service';
@Component({
  selector: 'app-storeedit',
  templateUrl: './storeedit.component.html',
  styleUrls: ['./storeedit.component.css']
})
export class StoreeditComponent implements OnInit {

  validateEmail = true;
  model=new Store();
  data:any;
  submitted = false;
  error:boolean;
  message:string;
  constructor(private storeService:MyitemsService,private router: Router) { }

  ngOnInit() {
    this.listAnStore();
    this.onSubmit
  }

  listAnStore() {
    this.storeService.listAnStore().subscribe(data => {

      console.log('Hello', this.data);
      this.data = data;
      this.model=this.data
      console.log('datass', this.model);
    },
      error => {
        console.log('user Error', error)
      });

  }
  onSubmit(form:NgForm){

    return this.storeService.editStore(form.value).subscribe(data =>{
      
      this.message=data['messsage'];
      swal(this.message, " " , "success");
      this.router.navigate(['/store/home']);
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
