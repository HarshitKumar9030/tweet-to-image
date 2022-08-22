import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITweetConfiguration } from "../interfaces/ITweetConfiguration";
import { ITweetEngagement } from "../interfaces/ITweetEngagement";
import { getDefaultTwitterConfiguration } from "../utils/Util";

const initialState: ITweetConfiguration = getDefaultTwitterConfiguration();

export const tweetConfigurationSlice = createSlice({
  name: "tweetConfiguration",
  initialState,
  reducers: {
    updateTweetContent: (state, action: PayloadAction<string>) => {
      return {...state, tweetContent: action.payload};
    },
    updateTweetSource: (state, action: PayloadAction<string>) => {
      return {...state, tweetSource: action.payload};
    },
    updateTweetUser: (state, action: PayloadAction<string>) => {
      return {...state, tweetUser: action.payload};
    },
    updateTweetUsername: (state, action: PayloadAction<string>) => {
      return {...state, tweetUsername: action.payload};
    },
    updateIsUserVerified: (state, action: PayloadAction<boolean>) => {
      return {...state, isUserVerified: action.payload};
    },
    updateTweetTimestamp: (state, action: PayloadAction<Date>) => {
        return {...state, tweetTimestamp: action.payload};
    },
    updateUserAvatar: (state, action: PayloadAction<string>) => {
      return {...state, tweetUserAvatar: action.payload};
    },
    updateShowTweeEngagement: (state, action: PayloadAction<string>) => {
      return {...state, showTweetEngagement: action.payload};
    },
    updateTweetEngagement: (state, action: PayloadAction<ITweetEngagement>) => {
      return {...state, tweetEngagement: action.payload};
    },
    updateTweetBackgroundColor: (state, action: PayloadAction<string>) => {
      return {...state, tweetBackgroundColor: action.payload};
    },
    updateIsImageDownloading: (state, action: PayloadAction<boolean>) => {
      return {...state, isImageDownloading: action.payload};
    },
  },
});

export const {
  updateTweetContent,
  updateTweetSource,
  updateTweetUser,
  updateTweetUsername,
  updateIsUserVerified,
  updateTweetTimestamp,
  updateUserAvatar,
  updateShowTweeEngagement,
  updateTweetEngagement,
  updateTweetBackgroundColor,
  updateIsImageDownloading,
} = tweetConfigurationSlice.actions;

export default tweetConfigurationSlice.reducer;
