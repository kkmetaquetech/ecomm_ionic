import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
products;
productDetails;
  constructor(private router: Router, private productservice: ProductService) {
    
  }

  // gotoPage() {
  //   this.router.navigate(['single-product']);
  // }

  ngOnInit(): void {
    this.getProductList();
  }




getProductList() {
  this.productservice.getProducts().subscribe((res) => {
//  console.log(res);
//  this.productDetails = res;
    this.products = res;
  });
  }
}
