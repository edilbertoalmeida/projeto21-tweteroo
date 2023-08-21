import { IsNotEmpty, IsString, IsUrl } from "class-validator";
import { User } from "src/entities/users.module";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    avatar: string;

    toUser() {
        return (this.name, this.avatar);
    }

}