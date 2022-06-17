import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComonent} from "./student/student.comonent";
import {ClassroomComponent} from "./student/classroom.component";
import {ProductsComponent} from "./products/products.component";
import {WeatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductComponent} from "./product/product.component";
import {FormsModule} from "@angular/forms";
import {Route, RouterModule} from "@angular/router";
import {Assignment1Component} from "./assigment1/assigment1.component";
import {Assigment2Component} from "./assigment2/assigment2.component";

const appRoutes: Route[] = [
  {
    path: 'lop-hoc', component: ClassroomComponent
  },
  {
    path:'san-pham', component: ProductsComponent
  },
  {
    path:'thoi-tiet', component: WeatherComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComonent,
    ClassroomComponent,
    ProductsComponent,ProductComponent,
    WeatherComponent,
    Assignment1Component,
    Assigment2Component

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
