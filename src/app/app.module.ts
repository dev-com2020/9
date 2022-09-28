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
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import localePL from '@angular/common/locales/pl'
import { PaAddTaxPipe } from "./addTax.pipe";

registerLocaleData(localePL);

@NgModule({
  declarations: [ProductComponent, PaAttrDirective, 
    PaModel, ProductTableComponent, ProductFormComponent, 
    ToggleViewComponent,  PaCellColor,PaAddTaxPipe,PaCategoryFilterPipe ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule], 
  providers: [{provide: LOCALE_ID, useValue:"pl-PL"}],
  bootstrap: [ProductComponent]
})
export class AppModule { }