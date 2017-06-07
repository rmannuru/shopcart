import { Component } from '@angular/core';
import { IOrder } from "app/Interface/iorder.interface";
import { ShopCartService } from "app/Services/shopcart.service";

@Component({
  selector: 'app-root',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  title = 'app works!';
  orderList: IOrder[];  
    errorMessage: string;  
    subTotal: number;
  
    constructor(private _articleService: ShopCartService
    //, private http:Http
    ) {  
        this.orderList = [];  
        // this.http.get('app/jsondata/orders.json')
        //         .subscribe(res => this.articles = res.json());
    }  
      
    ngOnInit(): void {  
        let self = this;  
        self._articleService.getOrderList().subscribe(response => {this.orderList = response; this.totalCount();}, error => this.errorMessage = < any > error);  
        //this.title = 'You have '+ this.articles.length +' items in order list ';     
  document.getElementById('shopCart').classList.add("drop-down");   
  } 

//     onComponentChange(value){
//    this.orderList.forEach((item,index)=>{
//      if(item.id==value){
//        console.log(index);
//      }
//    })
//  }

 totalCount(){
        this.subTotal = 0;
         for (let entry of this.orderList) {
            this.subTotal = this.subTotal + (entry.quantity * entry.price);
        }
    }
}
