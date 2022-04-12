import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  mockProduct: Product = {
    name: 'Razer Blade Pro Gaming',
    price: 8750
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.mockProduct)
      .subscribe(() => {
        this.productService.showMessage('Operação executada com sucesso!');
        this.router.navigate(['/products']);
      })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
