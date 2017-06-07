import { Component } from '@angular/core';
@Component({
  selector: 'my-dashboard',
  template: '<h3>My Product-Details</h3>'
})
export class ProductDetailComponent {
  ngOnInit(): void { 
  document.getElementById('cartCount').style.display = 'inline';
  document.getElementById('shopCart').classList.add("drop-down"); 
  }
 
 }