
import { Injectable } from '@angular/core';  
import { Http, Headers, RequestOptions, Response } from '@angular/http';  
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx';  
import 'rxjs/add/operator/toPromise';  
import { IOrder } from "app/Interface/iorder.interface";

@Injectable()
export class ShopCartService {  
    private jsonFileURL: string = "/assets/data/orders.json";  
    constructor(private http: Http) {}  
       
    getOrderList(): Observable < IOrder[] > { 
        return this.http.get(this.jsonFileURL).map((response: Response) => {  
            return <IOrder[] > response.json()  
        }).catch(this.handleError);  
    }  
        
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}  