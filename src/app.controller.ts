import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("sign-up")
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);
  }


  @Get("sign-up")
  getUsers() {
    return this.appService.getUsers();
  }

  /* @Get("tweets/:username")
   getHello(): string {
     return this.appService.getHello();
   }
 
   @Post("tweets")
 
 
 */

}
