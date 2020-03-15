import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any

  constructor() {
    this.products = [
      {
      id: 4387,
      name: 'Watch',
      brand: 'Timex',
      price: 7000
    },
      {
        id: 2354,
        name: 'Jersey',
        brand: 'Nike',
        price: 5874
      },
      {
        id: 7485,
        name: 'Mac Pro',
        brand: 'Apple',
        price: 1499
      }
    ];
  }

  ngOnInit() {
  }

}
