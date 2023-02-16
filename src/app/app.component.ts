import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nestjs-demo-ui';
  products!: Product[];
  displayedColumns: string[] = ['id', 'title', 'description', 'price'];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      this.products = result;
    });
  }
}
