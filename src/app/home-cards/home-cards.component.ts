import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.card.service';
import { Product } from './home.card.model';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {

  elife = 'eLife';
  ucaas = 'uCaaS';
  vsaas = 'vSaaS';
  clean_pipe = 'Clean Pipe';
  ntcpe = 'Nokia Thin CPE';
  over_all = 'Over All';

  // Empty array of Product type
  products:Product[] = [];

  constructor(private productService : ProductService) { }

  ngOnInit() {
     this.products = this.productService.getProducts();
  }

}
