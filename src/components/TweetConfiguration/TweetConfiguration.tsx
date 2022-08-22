import "./TweetConfiguration.css";
import {
  Accordion,
  Button,
  ColorInput,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import { At } from "tabler-icons-react";
import { ITweetConfiguration } from "../../interfaces/ITweetConfiguration";
import { getTwitterAvatarUrl, toBoolean, getRandomTweetEngagement } from "../../utils/Util";
import {
  updateTweetContent,
  updateTweetSource,
  updateTweetUser,
  updateTweetUsername,
  updateIsUserVerified,
  updateUserAvatar,
  updateShowTweeEngagement,
  updateTweetEngagement,
  updateTweetBackgroundColor,
} from "../../redux/slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export interface ITweetConfigurationProps {
    handleButtonClick: () => void;
}

const TweetConfiguration = (props: ITweetConfigurationProps) => {
    const { handleButtonClick } = props;
    const tweetConfiguration: ITweetConfiguration = useAppSelector((state) => state.tweetConfiguration);
    const dispatch = useAppDispatch();

    return (
      <form>
          <TextInput
            label="Twitter name"
            value={tweetConfiguration.tweetUser}
            className="field"
            onChange={(e)=> {
              dispatch(updateTweetUser(e.target.value));
            }}
          />
          <TextInput
            label="Twitter username"
            value={tweetConfiguration.tweetUsername}
            className="field"
            icon={<At size={14} />}
            onChange={(e)=> {
              dispatch(updateTweetUsername(e.target.value));
              dispatch(updateUserAvatar(getTwitterAvatarUrl(e.target.value)));
            }}
          />
          <Switch
            label="I'm verified"
            className="field checkbox-field"
            checked={tweetConfiguration.isUserVerified}
            onChange={(e)=> {
              dispatch(updateIsUserVerified(e.target.checked));
            }}
          />
          <Textarea
            label="Tweet content"
            description="A maximum of 280 characters"
            autosize
            minRows={2}
            maxRows={4}
            className="field"
            value={tweetConfiguration.tweetContent}
            maxLength={280}
            onChange={(e)=> {
              dispatch(updateTweetContent(e.target.value));
            }}
          />
          <Accordion>
            <Accordion.Item label="Advance configuration">
              <TextInput
                label="Twitter source"
                className="field"
                value={tweetConfiguration.tweetSource}
                onChange={(e)=> {
                  dispatch(updateTweetSource(e.target.value));
                }}
              />
              <RadioGroup
                label="Tweet engagement"
                onChange={(fieldValue)=> {
                  dispatch(updateShowTweeEngagement(fieldValue));
                  dispatch(updateTweetEngagement(toBoolean(fieldValue) ?
                    getRandomTweetEngagement(): tweetConfiguration.tweetEngagement
                  ));
                }}
                value={tweetConfiguration.showTweetEngagement}
                className="field checkbox-field"
              >
                <Radio value="false" label="Hide" />
                <Radio value="true" label="Randomize numbers" />
              </RadioGroup>
              <ColorInput
                value={tweetConfiguration.tweetBackgroundColor}
                label="Tweet background color"
                className="field"
                onChange={(e)=> {
                  dispatch(updateTweetBackgroundColor(e));
                }}
              />
            </Accordion.Item>
          </Accordion>
          <Button
            onClick={handleButtonClick}
            type={"button"}
            className="field"
            loading={tweetConfiguration.isImageDownloading}>
            Download tweet as an image
          </Button>
      </form>
    );
};

export default TweetConfiguration;