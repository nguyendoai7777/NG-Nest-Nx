import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { Request, Response } from 'express';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
import { ItemResponseInterface } from '../../interfaces/response.interface';

@Controller('items')
export class ItemsController {
  constructor(
    private itemsService: ItemsService
  ) {
  }
  @Get('all')
  async findAll(): Promise<ItemResponseInterface> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<any> {
    return this.itemsService.create(createItemDto.desc, createItemDto.qty, createItemDto.name);
  }
  @Get(':id')
  async findOne(@Param('id') id): Promise<ItemResponseInterface> {
    return this.itemsService.findById(id);
  }
  @Delete(':id')
  async delete(@Param('id') id): Promise<ItemResponseInterface> {
    return this.itemsService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<ItemResponseInterface> {
    return this.itemsService.update(id, updateItemDto);
  }
}
