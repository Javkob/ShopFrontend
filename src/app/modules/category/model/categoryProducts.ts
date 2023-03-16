import {Category} from "./category";
import {Page} from "../../common/model/page";
import {Product} from "../../common/model/product";

export interface CategoryProducts{
  category: Category,
  products: Page<Product>
}
