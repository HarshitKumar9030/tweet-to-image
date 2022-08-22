import { ITweetEngagement } from "./ITweetEngagement";

export interface ITweetConfiguration {
    tweetContent: string;
    tweetSource: string;
    tweetUser: string;
    tweetUsername: string;
    isUserVerified: boolean;
    tweetTimestamp: Date;
    tweetUserAvatar: string;
    showTweetEngagement: string;
    tweetEngagement: ITweetEngagement;
    tweetBackgroundColor: string;
    isImageDownloading: boolean;
}