import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data:any;
  model=new Contact;
  contact:Contact[];
  validateEmail = true;
  message:string;
  error: boolean = false;
  submitted = false;
  constructor(private router: Router,private contactService:ContactService  ) { }

  ngOnInit() {
    this.onSubmit
  }


  onSubmit(form: NgForm){
    return this.contactService.saveContact(form.value).subscribe(data =>{
       console.log("Credentials",data);
       console.log(data);
       console.log(form.value);
       this.message=data['message'];
       swal(this.message, "","success");
       form.reset();
       
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
