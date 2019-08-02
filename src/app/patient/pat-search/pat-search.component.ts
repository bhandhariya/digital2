import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pat-search',
  templateUrl: './pat-search.component.html',
  styleUrls: ['./pat-search.component.scss']
})
export class PatSearchComponent implements OnInit {

  constructor(private http:HttpClient,private arout:ActivatedRoute) { }
  name;NameSearch
  dev(){
    Swal.fire('in developement')
  }
  ngOnInit() {
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

}
