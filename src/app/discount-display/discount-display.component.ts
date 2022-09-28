import { Component, OnInit, Input } from '@angular/core';
import { DiscountService } from '../discount.service';

@Component({
  selector: 'paDiscountDisplay',
  template: `<div class="bg-info p-2">
              Rabat wynosi {{ discounter.discount}}.</div>`
  
})
export class DiscountDisplayComponent {

 constructor(public discounter: DiscountService){}

}
