import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { ProductDocument } from './product.schema';

import { Product, ProductDocument } from './product.model';
import { ProductResponse } from '../../interfaces/response.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<ProductDocument>
  ) {
  }
  async createProduct(title: string, description: string, price: number): Promise<ProductResponse> {
    const newProduct = new this.productModel({ title, description, price });
    const result = await newProduct.save().then();
    console.log(result);
    return {
      status: 'success',
      statusCode: 0o0,
      message: 'Successfully',
      data: {
        title,
        description,
        price
      }
    };
  }
}
