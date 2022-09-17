import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInManagerService {

  isSignedIn : boolean = false;
  userName : string = "Add UserName";

  constructor() { }
}
