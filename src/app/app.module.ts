import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import {  PaCellColor  } from './cellColor.directive';
import { registerLocaleData } from '@angular/common'
import localePL from '@angular/common/locales/pl'

registerLocaleData(localePL);

@NgModule({
  declarations: [ProductComponent, PaAttrDirective, PaModel, ProductTableComponent, ProductFormComponent, ToggleViewComponent,  PaCellColor ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule], 
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }