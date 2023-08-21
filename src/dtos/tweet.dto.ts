import { IsNotEmpty, IsString } from "class-validator";
import { Tweet } from "src/entities/tweet.module";

export class CreateTweetDto {
    @IsString()
    @IsNotEmpty({ message: 'All fields are required!' })
    username: string;  // com dúvida se isso vai funcionar;

    @IsString()
    @IsNotEmpty({ message: 'All fields are required!' })
    tweet: string;

    toTweet() {
        return (this.username, this.tweet)
    }

}