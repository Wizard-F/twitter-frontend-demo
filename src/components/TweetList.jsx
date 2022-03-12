import React from "react"
import axios from "axios";

import TweetCard from "./TweetCard";

export default class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_TWITTER_API_DEMO);
    axios.get(process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets')
      .then((res) => {
        this.setState({tweets: res.data})
      })
      .catch((error) => console.log(error));
  }

  render () {
    return (
      <main
        style={{
          padding: "1rem"
        }}
      >
        {this.state.tweets.map((tweet) => {
          return <TweetCard author={tweet.author.name} lastModifiedAt={tweet.lastModifiedAt} content={tweet.content} />;
        })}
      </main>
    );
  }
}