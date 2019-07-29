import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase } from "@angular/fire/database";
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,private auth:AngularFireAuth,private db:AngularFireDatabase) { }

  ngOnInit() {
  }
  loginForm=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  loginFormSubmit(r){
    console.log(r)
  }

}
