/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const PORT = 3333;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => {
    console.log('Listening at http://localhost:' + PORT);
  });
}

bootstrap();
