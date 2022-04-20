import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage]=useState("");
  const [tweetImage, setTweetImage]=useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Koushik chakrborty",
      username: "koushikAD",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GhbjGYEg1TJz2gbNaST7enlM2cApYX6_JledfRDmAk=s96-c-rg-br100"
    });

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhbjGYEg1TJz2gbNaST7enlM2cApYX6_JledfRDmAk=s96-c-rg-br100" />
          <input 
          onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?" 
            type="text" />
        </div>
        <input 
          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className="tweetBox__imageInput" 
          placeholder="Optional: Enter Image URL" 
          type="text" />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
