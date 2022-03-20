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
          padding: "1rem",
          // margin: "0.5rem"
        }}
      >
        {this.state.tweets.map((tweet) => {
          return <TweetCard author={tweet.author.name} content={tweet.content} lastModifiedAt={tweet.lastModifiedAt} id={tweet._id} />;
        })}
      </main>
    );
  }
}