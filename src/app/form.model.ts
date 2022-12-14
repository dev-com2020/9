import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.formvalidator";

export class ProductFormControl extends FormControl {
    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }
    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`Proszę podać ${this.label}.`);
                        break;
                    case "minlength":
                        messages.push(`Wymagane jest podanie przynajmniej
                ${this.errors['minlength'].requiredLength} znaków.`);
                        break;
                    case "pattern":
                        messages.push(`Wprowadzone dane zawierają niedozwolone znaki.`);
                        break;
                    case "limit":
                        messages.push(`Wartość max wynosi ${this.errors['limit'].limit}.`);
                        break;
                }
            }
        }
        return messages;
    }
}

export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            name: new ProductFormControl("Produkt", "name", "", Validators.required),

            category: new ProductFormControl("Kategoria", "category", "",
                Validators.compose([Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(3),
                Validators.maxLength(10)])),

            price: new ProductFormControl("Cena", "price", "",
                Validators.compose([Validators.required,
                LimitValidator.Limit(999),
                Validators.pattern("^[0-9\.]+$")]))
        });
    }
    get productControls(): ProductFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as ProductFormControl);
    }
    getValidationMessages(name: string): string[] {
        return (this.controls['name'] as ProductFormControl).getValidationMessages();
    }
    getFormValidationMessages(): string[] {
        let messages: string[] = [];
        Object.values(this.controls).forEach(c =>
            messages.push(...(c as ProductFormControl).getValidationMessages()));
        return messages;
    }


}