import { Item } from '../app/items/item.interface';
import { Product } from '../app/products/product.model';

export interface ResponseInterface {
  statusCode: string | number;
  status: string;
  message: string;
}

export interface ItemResponse extends ResponseInterface {
  data?: Item | Item[] | string;
}

export interface ProductResponse extends ResponseInterface {
  data?: Product | Product[] | string;
}
