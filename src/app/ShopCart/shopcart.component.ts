import { Http } from '@angular/http';  
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core'; 
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { IOrder } from "app/Interface/iorder.interface";
import { ShopCartService } from "app/Services/shopcart.service";

@Component({
    selector: 'my-shopCart',  
    templateUrl: './shopcart.component.html',
    styleUrls: ['./shopcart.component.css']
})  
export class ShopCartComponent implements OnInit { 
    viewUndo: boolean;
    viewMessage: string;
    viewDiv: boolean = false; 
    subTotal: number;
    deliveryCharge: number = 35;
    orderList: IOrder[];  
    errorMessage: string;  
    txt_quantity = new FormControl();
    @Output() outputEvent:EventEmitter<number>=new EventEmitter();
    //undoList: IUndoOrder[];
    //orderListMap : Map<number, IOrder> = new Map<number, IOrder>();
    undoList: IOrder[] = []
    
    constructor(private _router: Router ,private _orderService: ShopCartService
    //, private http:Http
    ) {  
        this.orderList = [];  
        // this.http.get('app/jsondata/orders.json')
        //         .subscribe(res => this.articles = res.json());
    }  
      
    ngOnInit(): void {  
        debugger
        let self = this;  
        self._orderService.getOrderList().subscribe(response => {this.orderList = response; this.totalCount(); },error => this.errorMessage = < any > error);        
        document.getElementById('cartCount').style.display = 'none';
        document.getElementById('shopCart').classList.remove("drop-down"); 
        //document.getElementById('shopCartContent').classList.remove("");        
        //s.classList.remove("shopCart");
    }

    removeShoppingCartItem(num: number, order:IOrder){ 
        this.viewDiv = true;
        this.viewUndo = true;
        this.viewMessage = 'Successfully removed '+ order.name +' from your cart.';
        this.undoList.push(order);
        this.orderList.splice(num, 1);
        this.totalCount();
        //this.undoRemovedList();
        (this.orderList.length > 0) ? this.deliveryCharge = 35 : this.deliveryCharge = 0;
    }

    subtractQuantity(i: any){
        this.viewDiv = false;
        this.viewUndo = false;
        if(i.quantity > 0){
            for (let entry of this.orderList) {
                if(entry.id == i.id){
                    entry.quantity = entry.quantity - 1;
                }
            }
        }    
        this.totalCount();    
    }

    addQuantity(i: any){
        this.viewDiv = false;
        this.viewUndo = false;
    for (let entry of this.orderList) {
            if(entry.id == i.id){
                entry.quantity = entry.quantity + 1;
            }
        }
        this.totalCount();
    }

    totalCount(){
        this.subTotal = 0;
         for (let entry of this.orderList) {
            this.subTotal = this.subTotal + (entry.quantity * entry.price);
        }
    }

    navigateToLogout(){
        this._router.navigate(['/signout']);
    }

    updateQuantity(ord:IOrder, txt_quantity){
        this.viewDiv = false;
        this.viewUndo = false;
      let matchedOrder = this.orderList.filter(order => order.id === ord.id);
        for (let match of matchedOrder) {
            match.quantity = Number(txt_quantity.value);
        }
        this.totalCount();
    }

    undoRemovedList(){
        this.viewDiv = true;
        this.viewUndo = false;
        this.viewMessage = 'Item added to cart';
        for(let entry of this.undoList){
            this.orderList.splice( entry.id-1, 0, entry );
        }
        this.undoList = [];
        this.totalCount();
    }
}  