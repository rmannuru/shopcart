import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  template: '<div style="margin-top: 22%;margin-left: 45%;"><h2 style="margin-left: -12%;;">You have been logged out.</h2><button type="button" class="btn btn-primary" (click)="toLogin()">CLICK TO LOGIN</button></div>'
})
export class SignoutComponent {
  constructor(private _router: Router){}
  toLogin(){
    this._router.navigate(['/login']);
  }
}