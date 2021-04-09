import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductResponse } from '../../interfaces/response.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }
  @Get()
  returnData(): string {
    return 'success';
  }
  @Post()
  async onCreateProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number
  ): Promise<ProductResponse> {
    return this.productsService.createProduct(title, description, price);
  }
}
