import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private UserService:UserService ,private _snackBar: MatSnackBar){}
  public user = {
    username:" ",
    password:" ",
    firstName:" ",
    lastName:" ",
    email:"",
    phone:" ",
    
  };
  
  ngOnInit(): void {}

  formSubmit(){
    // alert("submit"); 

    // condition for validation of data
    if(this.user.username==" "|| this.user.username==null){
      // alert("please enter the username");
      this._snackBar.open("username required!!","ok",{
        duration:3000,
      });
      return;
    }
   // now call addUser form userservice 
   this.UserService.addUser(this.user).subscribe(
    // for sucesss
    (data:any)=>{
    console.log(this.user);
    // alert("sucess");
    
    Swal.fire('Done','user id is'+data.id,'success');
    },
    // for failure
    (error)=>{
     console.log(error);
    //  alert("something went wrong");
    this._snackBar.open("some thing went wrong"," ",{
      duration:3000,
      
    });
    Swal.fire('Error','User already exist','error');
    }
   )


  }


}
