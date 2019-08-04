import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chkPage:number;
  course(){
    if(this.chkPage!=1){
      this.chkPage=1
    }
    else{
      this.chkPage=0;
    }
  }
  Resume(){
    if(this.chkPage!=2){
      this.chkPage=2
    }
    else{
      this.chkPage=0;
    }
  }
  Report(){
    if(this.chkPage!=3){
      this.chkPage=3
    }
    else{
      this.chkPage=0;
    }
  }
  Suggestion(){
    if(this.chkPage!=4){
      this.chkPage=4
    }
    else{
      this.chkPage=0;
    }
  }
  Project(){
    if(this.chkPage!=5){
      this.chkPage=5
    }
    else{
      this.chkPage=0;
    }
  }
  Sudent(){
    if(this.chkPage!=6){
      this.chkPage=6
    }
    else{
      this.chkPage=0;
    }
  }
  users(){
    if(this.chkPage!=7){
      this.chkPage=7
    }
    else{
      this.chkPage=0;
    }
  }
}
