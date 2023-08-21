import { Injectable } from '@nestjs/common';
import { User } from './entities/users.module';
import { Tweet } from './entities/tweet.module';
import { CreateUserDto } from './dtos/users.dto';

@Injectable()
export class AppService {

private users: User[]=[];
private tweets: Tweet[]=[];

constructor(){
  this.users.push (new User ("Bob esponja","https://static.wikia.nocookie.net/wikiesponja/images/4/41/180px-Spongebob-squarepants.png/revision/latest?cb=20120201005813&path-prefix=pt-br"));
  this.users.push (new User ("Harry Potter","https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/04/14/594335823-harry-potter.jpg"));
  this.users.push (new User ("Cosmo e Wanda","https://pm1.aminoapps.com/6408/56f32800c88dbf3b14fa0b5f667a1da81575f7bc_00.jpg"));
}

  getUsers(){
    return this.users
  }

createUser (userDTO: CreateUserDto){
  const newUser = new User (userDTO.name, userDTO.avatar);
  this.users.push(newUser);
  return newUser;
}

}
