import { Component } from '@angular/core';
@Component({
  selector: 'my-dashboard',
  template: '<h3>My AutoShip</h3>'
})
export class AutoShipComponent {
  ngOnInit(): void { 
  document.getElementById('cartCount').style.display = 'inline';
  document.getElementById('shopCart').classList.add("drop-down"); 
  }
 
 }