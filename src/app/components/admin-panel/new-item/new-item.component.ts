import { Component, OnInit } from '@angular/core';
import { Items } from '../../../model/items';
import { NgForm } from '@angular/forms';
import { ItemsService } from '../../../services/items.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  private imageSrc: string = '';
  image;
  model=new Items();
  submitted = false;
  error:boolean;
  message:string;
  form=NgForm;
  pic:string
  constructor(private itemService:ItemsService) { }

  ngOnInit() {
     this.onSubmit
  }
  onSubmit(form: NgForm){
    console.log("value",form.value)
    form.controls['itemsPicture'].setValue(this.image);
    console.log("pic",form.value)
    return this.itemService.createITem(form.value).subscribe(data =>{
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

  changeListener($event) : void {
    this.readThis($event.target);
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      this.image = myReader.result;
     this.image = this.image.replace(/^data:image\/[a-z]+;base64,/, "");
    }
    myReader.readAsDataURL(file);
  }
 

}
