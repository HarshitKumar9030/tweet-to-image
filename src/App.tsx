import { useCallback, useEffect, useMemo, useRef } from "react";
import "./App.css";
import { toPng } from "html-to-image";
import { Grid } from "@mantine/core";
import CustomWidget from "./components/CustomWidget/CustomWidget";
import AppHeader from "./components/AppHeader/AppHeader";
import { ITweetConfiguration } from "./interfaces/ITweetConfiguration";
import { getRandomFilename } from "./utils/Util";
import {
  updateTweetTimestamp,
  updateIsImageDownloading,
} from "./redux/slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import TweetConfiguration from "./components/TweetConfiguration/TweetConfiguration";
import TweetPreview from "./components/TweetPreview/TweetPreview";
import { Options } from "html-to-image/lib/options";

const App = () => {
  const tweetConfiguration: ITweetConfiguration = useAppSelector((state) => state.tweetConfiguration);
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      dispatch(updateTweetTimestamp(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const toPngOptions: Options = useMemo(() => {
    return {
      cacheBust: true,
      width: 1080,
      height: 1080,
      skipAutoScale: false,
      canvasWidth: 1080,
      canvasHeight: 1080,
      backgroundColor: tweetConfiguration.tweetBackgroundColor,
      pixelRatio: 4,
    };
  }, [tweetConfiguration]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    dispatch(updateIsImageDownloading(true));

    toPng(ref.current, toPngOptions).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = getRandomFilename();
      link.href = dataUrl;
      link.click();
      dispatch(updateIsImageDownloading(false));
    })
      .catch((err: any) => {
        console.log(err);
        dispatch(updateIsImageDownloading(false));
      });
  }, [ref, dispatch, toPngOptions]);

  return (
    <>
      <div style={{ display: "none" }}>
        <div className="outer" ref={ref}>
          <div className="middle">
            <div className="inner">
              <div id="exportContainer">
                <TweetPreview className="tweet-card" customStyle={{ fontSize: "14px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grid justify="center" grow gutter="xs" style={{ marginRight: "0" }}>
        <Grid.Col className="header-container">
          <AppHeader />
        </Grid.Col>
      </Grid>
      <Grid justify="center" grow gutter="xs" style={{ marginRight: "0" }}>
        <Grid.Col className="form-container" xs={12} sm={12} md={6} lg={6} xl={6}>
          <TweetConfiguration handleButtonClick={onButtonClick} />
        </Grid.Col>
        <Grid.Col className="tweet-card-container" xs={12} sm={12} md={6} lg={6} xl={6}
          style={{ backgroundColor: `${tweetConfiguration.tweetBackgroundColor}` }}>
          <div>
            <TweetPreview customStyle={{ fontSize: "12px" }} />
          </div>
        </Grid.Col>
      </Grid>
      <CustomWidget />
    </>
  );
};

export default App;
