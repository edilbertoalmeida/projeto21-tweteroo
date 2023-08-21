import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/users.module';
import { Tweet } from './entities/tweet.module';
import { CreateUserDto } from './dtos/users.dto';
import { CreateTweetDto } from './dtos/tweet.dto';
import { error } from 'console';

@Injectable()
export class AppService {

  private users: User[] = [];
  private tweets: Tweet[] = [];

  constructor() {
    this.users.push(new User("Bob_esponja", "https://static.wikia.nocookie.net/wikiesponja/images/4/41/180px-Spongebob-squarepants.png/revision/latest?cb=20120201005813&path-prefix=pt-br"));
    this.users.push(new User("Harry_Potter", "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg"));
    this.users.push(new User("Cosmo_e_Wanda", "https://pm1.aminoapps.com/6408/56f32800c88dbf3b14fa0b5f667a1da81575f7bc_00.jpg"));
    this.users.push(new User("Beto", "https://i.pinimg.com/originals/2f/e1/ba/2fe1ba81feb387b9653e72a1fee11104.png"));
  }

  getHello(): string {
    return "I'm okay!";
  }

  getUsers() {
    return this.users
  }

  getTweets(page: number) {
    const numPage = Number(page);

    if (numPage < 1) throw new HttpException("Informe uma página válida!", HttpStatus.BAD_REQUEST)

    const tweets = this.tweets.map(tweet => ({
      ...tweet.getUserInfo(),
      tweet: tweet.getTweet(),
    }));

    const startIndex = (numPage - 1) * 15;
    const endIndex = startIndex + 15

    if (isNaN(numPage)) {
      const selectedTweets = tweets.slice(-15);
      return selectedTweets
    }

    const selectedTweets = tweets.slice(startIndex, endIndex);
    return selectedTweets

  }

  getTweetsByUsername(username: string) {
    const tweetsByUser = this.tweets.filter((t) => t.getUserInfo().username === username)

    if (tweetsByUser.length === 0) return []

    const tweetResponse = tweetsByUser.map(tweet => ({
      ...tweet.getUserInfo(),
      tweet: tweet.getTweet()
    }));
    return tweetResponse;

  }

  createUser(userDTO: CreateUserDto) {

    const newUser = new User(userDTO.username, userDTO.avatar);
    this.users.push(newUser);
    return newUser;

  }

  createTweet(tweetDTO: CreateTweetDto) {
    const user = this.users.find((user) => user.getUsername() === tweetDTO.username)
    if (!user) throw new HttpException("You need being logged to tweet", HttpStatus.UNAUTHORIZED)

    const newTweet = new Tweet(user, tweetDTO.tweet);
    this.tweets.push(newTweet);

    const tweetResponse = {
      username: user.getUsername(),
      avatar: user.getAvatar(),
      tweet: tweetDTO.tweet,
    };
    return tweetResponse;
  }

}
