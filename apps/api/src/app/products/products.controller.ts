import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductResponse } from '../../interfaces/response.interface';
import { ProductDTO } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
  }
  @Get('')
  async findAll(): Promise<ProductResponse> {
    return this.productsService.getAllProducts();
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<ProductResponse> {
    return this.productsService.findById(id);
  }
  @Delete(':id')
  async deleteOne(@Param('id') id): Promise<ProductResponse> {
    return this.productsService.deleteOne(id);
  }
  @Post()
  async onCreateProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number
  ): Promise<ProductResponse> {
    return this.productsService.createProduct(title, description, price);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() product: ProductDTO): Promise<ProductResponse> {
    return this.productsService.updateProducts(id, product);
  }
}
