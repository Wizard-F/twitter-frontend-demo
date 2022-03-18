import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Tweet() {
  const params = useParams();
  const id = params.tweetId;
  const [tweet, setTweet] = useState();
  let lastModifiedAt;

  useEffect(() => {
    axios.get(process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets/' + id)
      .then(res => {
        setTweet(res.data);
        // lastModifiedAt = new Date(res.data.lastModifiedAt);
      })
      .catch(e => console.log(e));
  }, [tweet?._id]);

  if (!tweet) {
    return 'Loading...';
  } else {
    lastModifiedAt = new Date(tweet.lastModifiedAt);
    return (
      <main
        style={{
          border: "solid 1px",
          padding: "1rem"
        }}
      >
        <div>{tweet.author.name} <span style={{color: 'gray'}}>on {lastModifiedAt.getFullYear()}-{lastModifiedAt.getMonth()}-{lastModifiedAt.getDate()}</span></div>
        <p>{tweet.content}</p>
      </main>
    );
  }
}

// export default class Tweet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tweet: null
//     }
//   }

//   componentDidMount() {
//     console.log(this.props);
//     // const id = '61fe9d7c6303b148c75f0829';
//     // axios.get(process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets/' + id)
//     //   .then(res => this.setState({tweet: res.data}))
//     //   .catch(e => console.log(e));
//   }

//   render() {
//     if (!this.state.tweet) {
//       return 'Loading...';
//     }
//     const lastModifiedAt = new Date(this.state.tweet.lastModifiedAt);
//     return (
//       <main
//         style={{
//           border: "solid 1px"
//         }}
//       >
//         <div>{this.state.tweet.author.name} <span style={{color: 'gray'}}>on {lastModifiedAt.getFullYear()}-{lastModifiedAt.getMonth()}-{lastModifiedAt.getDate()}</span></div>
//         <p>{this.state.tweet.content}</p>
//       </main>
//     );
//   }
// }