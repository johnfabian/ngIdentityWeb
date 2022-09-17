import { Component, OnInit } from '@angular/core';
import { SignInManagerService } from './core/services/sign-in-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent implements OnInit {
  title = 'ngIdentityWeb';
  
  
  constructor(public signInManagerService : SignInManagerService){

  }

  ngOnInit() {
    
  }
  
}
