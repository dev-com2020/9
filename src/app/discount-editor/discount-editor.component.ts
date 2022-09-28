import { Component, OnInit, Input} from '@angular/core';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'paDiscountEditor',
  template: `<div class="form-group">
              <input [(ngModel)]="discounter.discount"
              class="form-group" type="number"></div>`
  
})
export class DiscountEditorComponent {
  constructor(public discounter: DiscountService){}


}
