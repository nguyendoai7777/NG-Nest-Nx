import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get('kl')
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(`request: ${ req.url }`);
    return res.send('<h1>hello</h1>');
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): CreateItemDto {
    return {
      desc: createItemDto.desc,
      name: createItemDto.name,
      qty: createItemDto.qty
    };
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `${ id }`;
  }
  @Delete(':id')
  delete(@Param('id') id): any {
    return `deleted item ${ id }`;
  }
  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): any {
    return `updated item ${ id } has nam is ${ updateItemDto.name }`;
  }
}
