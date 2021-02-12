import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-family-create',
  templateUrl: './patient-family-create.component.html',
  styleUrls: ['./patient-family-create.component.scss']
})
export class PatientFamilyCreateComponent implements OnInit {

  constructor(private router:Router,public arout:ActivatedRoute,private http:HttpClient) { }
id;
  ngOnInit() {
    this.arout.paramMap.subscribe(r=>{
      this.id=r.get('id');
    })
  }
  familyForm=new FormGroup({
    id: new FormControl(this.id),
    fatherName : new FormControl('',Validators.required),
    fatherAddress : new FormControl(''),
    fatherNumber : new FormControl(''),
    fatherEmail : new FormControl(''),
    guardianName : new FormControl(''),
    guardianAddress : new FormControl(''),
    guardianNumber : new FormControl(''),
    guardianEmail : new FormControl(''),
    spouseName : new FormControl(''),
    spouseAddress : new FormControl(''),
    spouseNumber : new FormControl(''),
    spouseEmail : new FormControl(''),
    spouseAge : new FormControl(''),
    spouseOccupation : new FormControl(''),
    relationShipStatus: new FormControl(''),
    childernsCount: new FormControl(''),
    updatedBy:new FormControl('')
  })
  familyFormSubmit(r){
    console.log(r)
    
    r.id=(this.id);
    r.updatedBy=(sessionStorage.getItem('MID'));
    
    if(this.familyForm.valid){
      console.log(r)
       this.http.post('/api/pat/addFamilyData',r).subscribe(this.addFamilyDataCB)
    }else{
      Swal.fire('Please fill required Fields')
    }
  }
  addFamilyDataCB=(dt)=>{
    console.log(dt);
    if(dt.first_name){
      Swal.fire('Personal Details Saved SuccessFully');
      this.router.navigate(['form5',{id:dt._id}])
      
    }else{
      Swal.fire('error Occured ')
    }
  }

}
