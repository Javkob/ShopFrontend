import {Category} from "./category";
import {Page} from "../../../shared/model/page";
import {Product} from "../../product/model/product";

export interface CategoryProducts{
  category: Category,
  products: Page<Product>
}
