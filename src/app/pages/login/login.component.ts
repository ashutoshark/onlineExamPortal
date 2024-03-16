import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
loginData={
  username:" ",
  password:" ",
};
  constructor(private snack:MatSnackBar ,private login :LoginService){

  }
  ngOnInit(): void {
      
  }
  formSubmit(){
    console.log("submit  btn has been clicked")
    if(this.loginData.username.trim()==" "|| this.loginData.username==null){
       this.snack.open("username is required","",{
        duration:3000,
       });
      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }


    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

//login...
this.login.loginUser(data.token);

this.login.getCurrentUser().subscribe((user: any) => {
  this.login.setUser(user);
  console.log(user);
  //redirect ...ADMIN: admin-dashboard
  //redirect ...NORMAL:normal-dashboard
  if (this.login.getUserRole() == 'ADMIN') {
    //admin dashboard
    window.location.href = '/admin';
    // this.router.navigate(['admin']);
    // this.login.loginStatusSubject.next(true);
  } else if (this.login.getUserRole() == 'NORMAL') {
    //normal user dashbaord
    window.location.href = '/user-dashboard';
    // this.router.navigate(['user-dashboard/0']);
    // this.login.loginStatusSubject.next(true);
  } else {
    this.login.logout();
  }

});


      },
      

      (error)=>{
        console.log("error");
        console.log(error);
        this.snack.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    )
    


    
  }
}
