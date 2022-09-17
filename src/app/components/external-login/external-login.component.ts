import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-external-login',
  templateUrl: './external-login.component.html'  
})
export class ExternalLoginComponent implements OnInit {

  @Input()
  externalLoginCount : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
