import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  Patient;id;
  url=""
  name;
  NameSearch
  constructor(private http:HttpClient,private arout:ActivatedRoute,private router:Router,public dialog: MatDialog) {
    this.arout.paramMap.subscribe(r=>{
      this.name=r.get('name');
    })
    console.log(this.name);
    this.searchByName(this.name);
   }
   searchByName(r){
    var obj={
      name:r
    }
    var searchResult = this.http.post('api/pat/getAllbyName',obj);
    searchResult.subscribe(res=>{
    this.NameSearch=res;
    console.log(this.NameSearch);
    })
  }

  ngOnInit() {
    this.getAllData();
  }
  getAllData(){
   
    this.http.get('/api/pat/getall').subscribe(this.cb)
  }
  cb=(dt)=>{
    this.Patient=dt;
    console.log(this.Patient)
  }
  fillPsychatricDetails(){
    this.router.navigate(['dashboard/accordian',{id:this.id}])
  }
  downloadExcel(){
  //   console.log(this.Patient)
  //   jsonexport(this.Patient,function(err, csv){
  //     if(err) return console.log(err);
  //     saveAs(new Blob([csv],{type:'text/json'}),'datdaata.csv')
  // });
  }
  // getThisPatientData(pid){
   
  //   const dialogRef =this.dialog.open(PatientComponent,{
  //     data: {id:pid},
  //     width:'75%'
  //   });
  // }
  // cb2=(d)=>{
  //   console.log(d)
  // }
  
    
    
  // }
  // openHistoryDialog(id){
  //   const dialogRef =this.dialog.open(HistoryComponent,{
  //     data: {id: id}
  //   });
  // }
  EditPsychatric(id){
    console.log(id)
    this.router.navigate(['form5',{id:id}])
  }
  dataSource;
  openBasicDetails(templateRef,id){
    var obj={
      id:id
    }
    this.http.post('/api/pat/alldata',obj).subscribe(dt=>this.dataSource=dt)
    let dialogRef = this.dialog.open(templateRef, {
      
      
  });
  }
  bgloid=0;
  patientEdit(id){
    console.log(id)
    this.bgloid=id
  }
  cancle(){
    this.bgloid=0;
  }
  patientEditForm=new FormGroup({
    fname:new FormControl(''),
    mname:new FormControl(''),
    lname:new FormControl(''),
    age:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl(''),
    number:new FormControl(''),
    dob:new FormControl(''),
    education:new FormControl(''),
    maritalStatus:new FormControl(''),
    occupation:new FormControl(''),
    gender:new FormControl(''),
    parentName:new FormControl(''),
    parentAddress:new FormControl(''),
  });
  patientFormSubmit(r){
    console.log(r);
    Swal.fire('in Developement')
  }
  Complaint;Illness;  
  openComplaintDialog(tempRef,id){
    var obj={
      id:id
    }
    this.http.post('/api/pat/alldata',obj).subscribe(this.complaindoialog)
      const dialogRef =this.dialog.open(tempRef,{
      });
      
    }
    complaindoialog=(dt)=>{
      this.Complaint=dt.Complaintsdetails;
      this.Illness=dt.Illnessdetails;
    }
  openModal(templateRef){
    let dialogRef = this.dialog.open(templateRef, {
      width: '250px',
      // data: { name: this.name, animal: this.animal }
  });
  }
  
  openHistory(templateRef,id){
    let dialogRef = this.dialog.open(templateRef, {
      width: '90%',
      height:'90%',
     data: { id:id }
  });

  this.http.post('/api/pat/alldata',{id:id}).subscribe(this.historyCallback)
  }

  PresentHistory
  TreatementHistory;
  PastHistory;
  HistoryOfModeOfIntake;
  FamilyHistory;
  PersonalHistory;
  SubstanceHistory;
  LegalHistory;


  historyCallback=(dt)=>{
    console.log(dt)
    this.PresentHistory=dt.PresentHistoryDetails;
    this.PastHistory=dt.PastHistoryDetails;
    this.HistoryOfModeOfIntake=dt.PastHiHisrotyOfModeOfIntakestorydetails;
    this.TreatementHistory=dt.TreateMentHistoryDetails;
    this.FamilyHistory=dt.FamilyHistoryDetails;
    this.PersonalHistory=dt.PersonalHistoryDetails;
    this.SubstanceHistory=dt.SubstanceHistoryDetails;
    this.LegalHistory=dt.LegalHistoryDetails;
  }
  CancleForm(){
    this.bgloid=1;
  }
  
  editPresentHistory(pid){
    console.log(pid);
    this.bgloid=pid;
  }  
  presentEditHistoryForm=new FormGroup({
    // id:new FormControl(this.bgloid),
    modifyBy:new FormControl(sessionStorage.getItem('MID')),
    history:new FormControl('')
  })
  presentEditHistoryFormSubmit(form){
    form.id=this.bgloid;
    console.log(form);
    this.http.post('/api/pat/editPresentHistory',form).subscribe(r=>{
      if(r){
        Swal.fire('Patient History Edited SuccessFully')
        window.location.reload();
        
      }
    })
    
  }
  editPastHistory(pid){
    console.log(pid);
    this.bgloid=pid;
  } 
  pastEditHistoryForm=new FormGroup({
    modifyBy:new FormControl(sessionStorage.getItem('MID')),
    PsychatricHistory:new FormControl(''),
    MedicalHistory:new FormControl('')
  })
  pastEditHistoryFormSubmit(form){
    form.id=this.bgloid;
    
    console.log(form)
    this.http.post('/api/pat/editPastHistory',form).subscribe(r=>{
      if(r){
        Swal.fire('Patient History Edited SuccessFully')
        window.location.reload();
        
      }
    })
  }
  editTreatementHistory(pid){
    console.log(pid);
    this.bgloid=pid;
  }
  editTreatementHistoryForm=new FormGroup({
    modifyBy:new FormControl(sessionStorage.getItem('MID')),
    PresentHistory:new FormControl(''),
    PastHistory:new FormControl('')
  })
  editTreatementHistorySubmit(form){
    form.id=this.bgloid;
    console.log(form)
    this.http.post('/api/pat/editTreatementHistory',form).subscribe(r=>{
      if(r){
        Swal.fire('Patient History Edited SuccessFully')
        window.location.reload();
        
      }
    })
  }

  editFamilyHistory(pid){
    console.log(pid);
    this.bgloid=pid;
  }
  FamilyEditHistoryForm=new FormGroup({
    modifyBy:new FormControl(sessionStorage.getItem('MID')),
    mentalHistory:new FormControl(''),
    environHistory:new FormControl(''),
    attitudeHistory:new FormControl(''),
    livingHistory:new FormControl('')
  })
  editFamilyHistorySubmit(form){
    form.id=this.bgloid;
    console.log(form)
    this.http.post('/api/pat/editFamilyHistoryHistory',form).subscribe(r=>{
      if(r){
        Swal.fire('Patient History Edited SuccessFully')
        window.location.reload();
        
      }
    })
  }
  editPersonalHistory(pid){
    console.log(pid);
    this.bgloid=pid;

}

PersonalEditHistoryForm=new FormGroup({
  modifyBy:new FormControl(sessionStorage.getItem('MID')),
  BirthHistory:new FormControl(''),
  DevelopmentHistory:new FormControl(''),
  EducationHistory:new FormControl(''),
  ImmunizationHistory:new FormControl(''),
  MarritalHistory:new FormControl(''),
  SexualHistory:new FormControl(''),
  MenstrualandobstetricHistory:new FormControl(''),
  OccupationHistory:new FormControl(''),


})
editPersonalHistorySubmit(form){
  form.id=this.bgloid;
  console.log(form)
  this.http.post('/api/pat/editPersonalHistory',form).subscribe(r=>{
    if(r){
      Swal.fire('Patient History Edited SuccessFully')
      window.location.reload();
      
    }
  })
}

substanceHistoryEdit(pid){
  console.log(pid);
  this.bgloid=pid;
}


SubstaceEditHistoryForm=new FormGroup({
  modifyBy:new FormControl(sessionStorage.getItem('MID')),
  HistoryOfChoiseOfSubstance:new FormControl(''),
  HistoryOfTotalDurationOfUse:new FormControl(''),
  HistoryOfDurationOfRegularUse:new FormControl(''),
  HistoryOfDailyIntake:new FormControl(''),
  HistoryOfLastIntakeOfDrug:new FormControl('')
 


})
editsubstanceHistorySubmit(form){
  form.id=this.bgloid;
  console.log(form)
  this.http.post('/api/pat/editsubstanceHistory',form).subscribe(r=>{
    if(r){
      Swal.fire('Patient History Edited SuccessFully')
      window.location.reload();
      
    }
  })
}
legalHistoryEdit(pid){
  console.log(pid);
  this.bgloid=pid;
}

LegalEditHistoryForm=new FormGroup({
  modifyBy:new FormControl(sessionStorage.getItem('MID')),
  HomicideAttempt:new FormControl(''),
  preMorbidpersonality:new FormControl(''),
 
 


})

LegalHistoryEditSubmit(form){
  form.id=this.bgloid;
  console.log(form)
  this.http.post('/api/pat/editLegalHistory',form).subscribe(r=>{
    if(r){
      Swal.fire('Patient History Edited SuccessFully')
      window.location.reload();
      
    }
  })
}

}
