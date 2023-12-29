import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}

