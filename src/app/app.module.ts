import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from "app/Login/login.component";
import { AccountComponent } from "app/Account/account.component";
import { ShopCartService } from "app/Services/shopcart.service";
import { ProductComponent } from "app/Product/product.component";
import { ProductDetailComponent } from "app/ProductDetail/productdetail.component";
import { AutoShipComponent } from "app/AutoShip/autoship.component";
import { ShopCartComponent } from "app/ShopCart/shopcart.component";
import { DashboardComponent } from "app/Dashboard/dashboard.component";
import { SignoutComponent } from "app/Signout/signout.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login',  component: LoginComponent },
   {path:'account', component: AccountComponent,
    children:[
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'dashboard',  component: DashboardComponent },
            {path:'product', component:ProductComponent},
            {path:'product-details', component:ProductDetailComponent},
            {path:'shop-cart', component:ShopCartComponent},
            {path:'autoship', component:AutoShipComponent}
    ]
  },
  {path:'signout', component:SignoutComponent}

  // {path:'product-details', component:ProductDetailComponent},
  // {path:'shop-cart', component:ShopCartComponent},
  // {path:'autoship', component:AutoShipComponent},
  // {path:'signout', component:SignoutComponent}
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopCartComponent,
    AutoShipComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
     ReactiveFormsModule 
  ],
  providers: [ShopCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
