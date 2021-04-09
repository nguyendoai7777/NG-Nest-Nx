import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import DB_CONFIG from '../keys/db.keys';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(DB_CONFIG.mongodbURI),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
