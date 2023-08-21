import { User } from "./users.module";

export class Tweet {
    private user: User;
    private tweet: string;

    constructor(user: User, tweet: string) {
        this.user = user
        this.tweet = tweet;
    }

    getUser(): User {
        return this.user
    }

    getTweet(): string {
        return this.tweet
    }

    getUserInfo() {
        return {
            username: this.user.getUsername(),
            avatar: this.user.getAvatar()
        }
    }

}