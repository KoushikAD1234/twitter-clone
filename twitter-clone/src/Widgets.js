import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
            <SearchIcon className='widgets__searchIcon' />
            <input placeholder='Search Twitter' type="text" />
        </div>
        <div className="widgets__widgetContainer">
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={'858551177860055040'} />

            <TwitterTimelineEmbed
            sourceType='profile'
            screenName='cleverqazi'
            options={{ height: 400 }}
            />

            <TwitterShareButton
            url={"https://www.facebook.com/koushik.chakraborty.16547"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi"}}
            />
        </div>
    </div>
  )
}

export default Widgets