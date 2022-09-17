import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resend-email-confirmation',
  templateUrl: './resend-email-confirmation.component.html'
})
export class ResendEmailConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    alert("submit");
  }

}
