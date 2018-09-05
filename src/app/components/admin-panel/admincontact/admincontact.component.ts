import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../model/contact';
import { Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrls: ['./admincontact.component.css']
})
export class AdmincontactComponent implements OnInit {

  data:any;
  model=new Contact;
  contact:Contact[];
  validateEmail = true;
  message:string;
  error: boolean = false;
  submitted = false;
  constructor(private router: Router,private contactService:ContactService ) { }

  ngOnInit() {
    this.listAllContact();
  }

  listAllContact() {
    this.contactService.listAllContact().subscribe(data => {

      console.log('user', this.data);
      this.data = data;
      this.contact=this.data;
      console.log('user', this.contact);
    },
      error => {
        console.log('user Error', error)
      });

  }

  deleteUser(id:number){
    console.log("Contact delete id",id)
    this.contactService.deleteContact(id).subscribe(data => {
      this.listAllContact();
    },
      error => {
        console.log('user Error', error)
      });

  }

}
