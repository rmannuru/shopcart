import { Component } from '@angular/core';
@Component({
  selector: 'my-dashboard',
  template: '<h3>My Dashboard</h3>'
})
export class DashboardComponent {
  ngOnInit(): void { 
  document.getElementById('cartCount').style.display = 'inline';
  document.getElementById('shopCart').classList.add("drop-down"); 
  }
 
 }