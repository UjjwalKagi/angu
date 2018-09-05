import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl,Validators } from '@angular/forms';
import { Search } from '../../../model/search';
import { HomeService } from '../../../services/home.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Store } from '../../../model/store';
import { Order } from '../../../model/order';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  model=new Search();
  data: any;
  message:String;
  error:boolean
  store:Store[];
  order:Order[];
  constructor(private homeService:HomeService,private router: Router) { }

  ngOnInit() {

    function myFunction() {
      var x = document.getElementById("table");
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  }
  
  }

  onSubmit(form: NgForm){
    return this.homeService.getDistance(form.value).subscribe(data =>{
       console.log("Credentials",data);
      this.data=data;
      this.store=this.data;
      this.message=data['message'];
    


     }, error => {
      this.error = true;
      if (error.error['message']) {
        this.message = error.error['message'];
      }
      else {
        this.message = error.message;
      }

    });
    }

    seePrice(id){
      return this.homeService.seePrice(id).subscribe(data=>{
        this.data=data;
        this.order=this.data;
      },error => {
        this.error = true;
        if (error.error['message']) {
          this.message = error.error['message'];
        }
        else {
          this.message = error.message;
        }
  
      });
    

    }

}
