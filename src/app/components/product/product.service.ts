import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
    ) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  readAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readProductById(id: number): Observable<Product> {
    const payload = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(payload);
  }

  updateProduct(product: Product): Observable<Product> {
    const payload = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(payload, product);
  }
}
