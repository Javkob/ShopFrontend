import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './product.service';

interface product {
  name: "Produkt 1",
  category: "Kategoria 1",
  description: "Opis produktu 1",
  price: 11.99,
  currency: "PLN"
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[]= [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
