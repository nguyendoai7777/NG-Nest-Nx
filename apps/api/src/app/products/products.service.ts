import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { ProductDocument } from './product.schema';

import { Product, ProductDocument, ProductDTO } from './product.model';
import { ProductResponse } from '../../interfaces/response.interface';
import { FAIL, SUCCESS } from '../../assets/response.template';

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
  async getAllProducts(): Promise<ProductResponse> {
    const data = await this.productModel.find();
    if (!data) {
      return {
        ...FAIL,
        message: 'Something went wrong!!',
        data: null
      };

    }
    return {
      ...SUCCESS,
      data
    };
  }
  async findById(id: string): Promise<ProductResponse> {
    const data = await this.productModel.findById(id);
    if (!data) {
      return {
        ...FAIL,
        message: 'this product could be not find',
        data: null
      };
    }
    return {
      ...SUCCESS,
      data
    };
  }
  async deleteOne(id: string): Promise<ProductResponse> {
    const resp = await this.productModel.deleteOne({ _id: id }).exec();
    if (!resp) {
      return {
        ...FAIL,
        message: 'Can\'t find id of products, so can\'t delete'
      };
    }
    return {
      ...SUCCESS,
      data: resp['ok'] === 1 ? 'Deleted' : 'Not yet'
    };
  }
  async updateProducts(id: string, product: ProductDTO): Promise<any> {
    const find = await this.productModel.findByIdAndUpdate({ _id: id }, product);
    if (!find) {
      return {
        ...FAIL,
        message: 'Can\'t find this products to update id'
      };
    }
    return {
      ...SUCCESS,
      message: 'Update successfully',
      data: null
    };
  }
}
