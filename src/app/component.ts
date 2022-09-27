import { ApplicationRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "./product.model";
import { Model } from "./repository.model";

@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();

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
    console.log("Nowy produkt: " + this.jsonProduct);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid){
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }


  getFormValidationMessages(form: NgForm): string[]{
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k],k).forEach(m=>messages.push(m));
    });
    return messages;
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`Proszę podać ${thing}.`);
            break;
          case "minlength":
            messages.push(`Wymagane jest podanie przynajmniej
            ${state.errors['minlength'].requiredLength} znaków.`);
            break;
          case "pattern":
            messages.push(`Wprowadzone dane zawierają niedozwolone znaki.`);
            break;
        }
      }
    }
    return messages;
  }
}