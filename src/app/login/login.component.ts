import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private auth:AngularFireAuth,private http:HttpClient) { }

  ngOnInit() {
  }
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  loginFormSubmit(r){
    console.log(r)
  var userLogin=this.auth.auth.signInWithEmailAndPassword(r.email,r.password);
  var user=this.auth.auth.currentUser;
  userLogin.then(()=>{
    if(user){
      var obj={
        uid:user.uid,
        email:user.email
      }
      this.http.post('/api/users/login',obj).subscribe(this.cb)
    }
  })
  }
  cb=(dt)=>{
    console.log(dt)
        console.log(dt.user._id)
    sessionStorage.setItem('Token',dt.token);
    sessionStorage.setItem('UID',dt.user.uid);
    sessionStorage.setItem('MID',dt.user._id)
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'User login Successfully ',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl('dashboard')
  }
}
