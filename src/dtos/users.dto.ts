import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "src/entities/users.module";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: 'All fields are required!' })
    username: string;

    @IsString()
    @IsNotEmpty({ message: 'All fields are required!' })
    avatar: string;

    toUser() {
        return (this.username, this.avatar);
    }

}