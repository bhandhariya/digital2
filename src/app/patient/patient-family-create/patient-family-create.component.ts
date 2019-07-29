import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-family-create',
  templateUrl: './patient-family-create.component.html',
  styleUrls: ['./patient-family-create.component.scss']
})
export class PatientFamilyCreateComponent implements OnInit {

  constructor(private route:Router) { }
id;
  ngOnInit() {
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
    this.route.navigateByUrl('form5')
    // this.familyForm.get('id').setValue(this.id);
    // this.familyForm.get('updatedBy').setValue(sessionStorage.getItem('MID'));
    // console.log(this.familyForm.value)
    // if(this.familyForm.valid){
    //   console.log(this.familyForm.value)
    //    this.http.post('/api/pat/addFamilyData',this.familyForm.value).subscribe(this.addFamilyDataCB)
    // }else{
    //   Swal.fire('Please fill required Fields')
    // }
  }
  addFamilyDataCB=(dt)=>{
    // console.log(dt);
    // if(dt.first_name){
    //   Swal.fire('Personal Details Saved SuccessFully');
    //   this.router.navigate(['dashboard/accordian',{id:dt._id}])
      
    // }else{
    //   Swal.fire('error Occured ')
    // }
  }

}
