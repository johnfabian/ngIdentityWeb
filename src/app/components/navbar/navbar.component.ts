import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent implements OnInit {

  _isSginedIn : boolean = false;
  @Input()
  get isSignedIn() : boolean{
    return this._isSginedIn;
  }
  set isSignedIn(val : boolean){
    this._isSginedIn = val;
  }

  @Input()
  userName : string ="";

  constructor() { }

  ngOnInit(): void {
  }

  logOut($event :any){
    alert("logout");
  }

}
