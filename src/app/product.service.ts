import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get<Product[]>(this.apiUrl + '/products');
  }
}
