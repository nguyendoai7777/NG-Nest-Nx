import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export interface Product {
  _id?: string;
  title?: string;
  description?: string;
  price?: number;
}

export type ProductDocument = Product & Document;

export class ProductDTO {
  readonly title: string;
  readonly description: string;
  readonly price: number;
}
