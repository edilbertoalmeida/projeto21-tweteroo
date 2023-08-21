import { IsNotEmpty, IsString } from "class-validator";
import { Tweet } from "src/entities/tweet.module";
import { User } from "src/entities/users.module";

export class CreateTweeterDto {

    user: User;  // com dúvida se isso vai funcionar;

    @IsString()
    @IsNotEmpty()
    tweet: string;

    toTweet() {
        return (this.user, this.tweet)
    }

}