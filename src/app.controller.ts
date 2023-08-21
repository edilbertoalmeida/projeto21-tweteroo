import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/users.dto';
import { CreateTweetDto } from './dtos/tweet.dto';
import httpStatus from 'http-status';
import { stringify } from 'querystring';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("sign-up")
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto) {
    try {
      return (this.appService.createUser(body))
    }
    catch (error) {
      throw new HttpException("All fields are required!", HttpStatus.BAD_REQUEST)
    }
  }

  @Post("tweets")
  createTweet(@Body() body: CreateTweetDto) {
    try {
      return (this.appService.createTweet(body))
    }
    catch (error) {
      throw new HttpException("You need being logged to tweet", HttpStatus.UNAUTHORIZED)
    }
  }


  @Get("sign-up")
  getUsers() {
    return this.appService.getUsers();
  }

  @Get("tweets")
  getTweets() {
    return this.appService.getTweets();
  }

  @Get("tweets/:username")
  findOne(@Param("username") username: string) {
    return this.appService.getTweetsByUsername(username);
  }



}
