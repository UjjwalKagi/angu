import { Component, OnInit } from '@angular/core';
import { Store } from '../../../model/store';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { StoreService } from '../../../services/store.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {

  validateEmail = true;
  model=new Store();
  data:any;
  submitted = false;
  error:boolean;
  message:string;
  constructor(private router: Router,private storeService:StoreService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    return this.storeService.createStore(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
       this.message=data['message'];
       form.reset();
        
       swal(this.message, " " , "success");
       this.router.navigate(['/astore']);

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
