import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/users.module';
import { Tweet } from './entities/tweet.module';

@Module({
  imports: [User, Tweet],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
