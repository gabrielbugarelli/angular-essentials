import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar, 
    private http: HttpClient
    ) { }

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-success'],
    })
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  readAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  readProductById(id: number): Observable<Product> {
    const payload = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(payload).pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    const payload = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(payload, product).pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    const payload = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(payload).pipe(
      map(obj => obj),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  };
}
