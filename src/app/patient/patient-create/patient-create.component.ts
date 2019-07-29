import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
  }
  profileForm=new FormGroup({
    cretatedBy: new FormControl(''),
    cretionTime:new FormControl(''),
    doctorName: new FormControl('',Validators.required),
    firstName: new FormControl('',Validators.required),
    middleName: new FormControl(''),
    lastName: new FormControl(''),
    addmissionDate: new FormControl('',Validators.required),
    permanentAddress: new FormControl('',Validators.required),
    correspondenceAddress: new FormControl(''),
    mobileNumber: new FormControl('',Validators.required),
    landlineNumber: new FormControl(''),
    residanceNumber: new FormControl(''),
    officeNumber: new FormControl(''),
    email: new FormControl(''),
    DOB: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl('',Validators.required),
    education: new FormControl(''),
    occupation: new FormControl(''),
    maritalStatus: new FormControl(''),
    basicfile: new FormControl(''),
    imageURL: new FormControl('',Validators.required),
  })

  profileFormSubmit(r){
    console.log(r)
    this.router.navigateByUrl('pat-family-create')
  }
}
