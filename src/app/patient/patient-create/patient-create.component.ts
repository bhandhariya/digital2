import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from "@angular/fire/storage";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.scss']
})
export class PatientCreateComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private storage:AngularFireStorage) { }

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
    r.cretatedBy=sessionStorage.getItem('MID');
    r.cretionTime=Date.now();
    if(this.profileForm.valid){
      console.log(r);
     this.http.post('/api/pat/create',r).subscribe(this.createCB)
      
}else{

 Swal.fire('Form Not Filled Correctly');
}
    // this.router.navigateByUrl('pat-family-create')
  }

  createCB=(dt)=>{
    console.log(dt)
    if(dt.first_name){
      Swal.fire('ok Patient have been Saved Successfully');
       this.router.navigate(['pat-family-create',{id:dt._id}])
    }else{
      
      Swal.fire('ok Patient not Saved Successfully')
    }
  }

  uploadPhoto(event){
    const file = event.target.files[0];
    console.log(file);
    var randomString=Math.floor(Date.now() / 1000);
    const filePath = 'mentcom'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);
    task.snapshotChanges().pipe(
      finalize(() =>{ var url = fileRef.getDownloadURL()
        url.subscribe(e=>{
          console.log(e)
          this.profileForm.get('imageURL').setValue(e)
        })
      } )
   )
  .subscribe(e=>{
    
  })

  }
}
