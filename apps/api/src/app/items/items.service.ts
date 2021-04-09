import { Injectable } from '@nestjs/common';
import { Item, ItemDocument } from './item.interface';
import { ItemResponseInterface } from '../../interfaces/response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FAIL, SUCCESS } from '../../assets/response.template';
import { CreateItemDto } from './create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<ItemDocument>
  ) {
  }
  async findAll(): Promise<ItemResponseInterface> {
    const data = await this.itemModel.find();
    if (!data) {
      return {
        ...FAIL,
        message: 'chiu roi',
        data: null
      };
    }
    return {
      ...SUCCESS,
      data
    };
  }
  async create(desc: string, qty: number, name: string): Promise<any> {
    const newItem = new this.itemModel({ name, qty, desc });
    const result = await newItem.save();
    if (!result) {
      return {
        ...FAIL,
        message: 'create fail, please re-check'
      };
    }
    return {
      ...SUCCESS,
      data: result
    };
  }
  async findById(id: string): Promise<ItemResponseInterface> {
    const find = await this.itemModel.findById(id);
    if (!find) {
      return {
        ...FAIL,
        message: 'Can not find this item!'
      };
    }
    return {
      ...SUCCESS,
      data: find
    };
  }
  async delete(id: string): Promise<ItemResponseInterface> {
    const r = await this.itemModel.deleteOne({ _id: id }).exec();
    if (!r) {
      return {
        ...FAIL,
        message: 'Item could be not found'
      };
    }
    return {
      ...SUCCESS,
      data: r['ok'] === 1 ? 'deleted' : 'no'
    };
  }
  async update(id: string, updateContent: CreateItemDto): Promise<ItemResponseInterface> {
    const r = await this.itemModel.findByIdAndUpdate({ _id: id }, updateContent);
    if (!r) {
      return {
        ...FAIL,
        message: 'Can not update this item'
      };
    }
    return {
      ...SUCCESS,
      message: 'Updated successfully',
      data: null
    };
  }
}
