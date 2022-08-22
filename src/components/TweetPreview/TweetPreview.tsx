import TweetCard from "react-tweet-card";
import { ITweetConfiguration } from "../../interfaces/ITweetConfiguration";
import { useAppSelector } from "../../redux/hooks";
import { toBoolean } from "../../utils/Util";

export interface ITweetPreviewProps {
    customStyle?: React.CSSProperties;
    className?: string;
}

const TweetPreview = (props: ITweetPreviewProps) => {
    const { customStyle, className } = props;
    const tweetConfiguration: ITweetConfiguration = useAppSelector((state) => state.tweetConfiguration);
    return (
        <TweetCard
            author={{
            name: tweetConfiguration.tweetUser,
            username: tweetConfiguration.tweetUsername,
            image: tweetConfiguration.tweetUserAvatar,
            isVerified: tweetConfiguration.isUserVerified,
            }}
            tweet={tweetConfiguration.tweetContent}
            time={tweetConfiguration.tweetTimestamp}
            source={tweetConfiguration.tweetSource}
            theme="light"
            showEngagement={toBoolean(tweetConfiguration.showTweetEngagement)}
            engagement={tweetConfiguration.tweetEngagement}
            style={customStyle}
            className={className}
        />
    );
};

export default TweetPreview;