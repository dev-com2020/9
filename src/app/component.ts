import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "./product.model";
import { Model } from "./repository.model";
import { ProductFormGroup, ProductFormControl } from "./form.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
  formGroup: ProductFormGroup = new ProductFormGroup();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }
  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  getProductCount(): number {
    console.log("Wywołanie metody getProductCount().")
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  targetName: string = "Kajak";

  counter: number = 1;

  // get nextProduct(): Product{
  //   return this.model.getProducts().shift();
  // }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

  selectedProduct: string;

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  formSubmitted: boolean = false;

  submitForm() {
    Object.keys(this.formGroup.controls).forEach(c => this.newProduct[c] 
      = this.formGroup.controls[c].value);
    this.formSubmitted = true;
    if (this.formGroup.valid){
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      this.formGroup.reset();
      this.formSubmitted = false;
    }
  }
}