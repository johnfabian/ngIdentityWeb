import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})
export class LoginComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  login($event : any){
    alert("login");
  }

}
