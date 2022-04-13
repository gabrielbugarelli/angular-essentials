import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['name', 'price', 'action'];

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readAllProducts()
      .subscribe((product) => {
        this.products = product;
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct(1).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso!');
    })
  }
}
