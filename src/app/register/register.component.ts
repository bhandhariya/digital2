import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/auth";
import { HttpClient } from '@angular/common/http';
import * as Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AngularFireAuth,private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  registerForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    rpassword:new FormControl('')
  })
  registerFormSubmit(r){
    console.log(r)
    this.auth.auth.createUserWithEmailAndPassword(r.email,r.password).then(()=>{
      this.auth.auth.currentUser.updateProfile({
        displayName:r.name
      }).then(()=>{
        var user=this.auth.auth.currentUser;
        var obj={
          name:user.displayName,
          email:user.email,
          providerId:user.providerId,
          uid:user.uid,
          emailVerified:user.emailVerified
         }
         this.http.post('/api/users/register',obj).subscribe(this.cb)
      })
    }).catch(error=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.default.fire("Oops!", errorMessage, "error");
    })
  }
cb=(dt)=>{
  if(dt.uid){
    Swal.default.fire("Great", "User Registered Successfully", "success");
    this.router.navigate(['login'])
  }

}
}
