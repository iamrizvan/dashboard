import { Injectable } from "@angular/core";
import "rxjs";
import { Product } from "./home.card.model";

@Injectable()
export class ProductService {
  product: Product[] = [
    {
      name: "eLife",
      percentage: 49
    },
    {
        name: "vSaaS",
        percentage: 71
      },
      {
        name: "uCaaS",
        percentage: 79
      },
      {
        name: "Clean Pipe",
        percentage: 93
      },
      {
        name: "Thin CPE",
        percentage: 87
      },
      {
        name: "Over All",
        percentage: 78
      }
  ];
  
  // Class constructor
  constructor() {}
  getProducts() {
      // slice method will create a real copy of array.
    return this.product.slice();
  }
}
