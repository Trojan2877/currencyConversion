import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoGateway } from './crypto/crypto.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CryptoGateway],
})
export class AppModule {}
