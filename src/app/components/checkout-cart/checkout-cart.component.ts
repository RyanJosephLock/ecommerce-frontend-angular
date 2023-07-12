import { Component } from '@angular/core';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: 'checkout-cart.component.html',
  styleUrls: ['checkout-cart.component.css']
})
export class CheckoutCartComponent {

  checkoutProducts: Product[] = [];
  checkoutTotalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService){ }

  ngOnInit(): void {
    this.checkoutProducts = this.shoppingCartService.getCheckoutProducts();
    this.checkoutTotalPrice = this.shoppingCartService.getCheckoutTotalPrice()
  }

  // TO DO: Consider adding the Observable Subscription to this compoonent to handle the removal of cart items. See project called "01.2-angulr-post-reader-observables"

}
