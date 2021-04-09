import { Document } from 'mongoose';

export interface Item {
  _id: string;
  name: string;
  desc: string;
  qty: number;
}

import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  qty: String,
  desc: String
});

export type ItemDocument = Item & Document;
