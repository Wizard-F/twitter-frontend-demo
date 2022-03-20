import React, { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Tweet() {
  const params = useParams();
  const id = params.tweetId;
  const [tweet, setTweet] = useState();
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [tooLong, setTooLong] = useState(false);
  const [postFail, setPostFail] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets/' + id)
      .then(res => {
        setTweet(res.data);
        setContent(res.data.content);
      })
      .catch(e => console.log(e));
  }, [tweet?._id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets/' + id,
        {headers: {'x-auth-token': user.token}}
      );
      navigate("/", {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
    setTooLong(false);
    setPostFail(false);
  };

  const handleSaveChanges = async event => {
    event.preventDefault();
    if (content.length > 280) {
      setTooLong(true);
      return;
    }
    try {
      const response = await axios.put(
        process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets/' + id,
        {content},
        {headers: {'x-auth-token': user.token}}
      );
      // set tweet to have updated content and lastModifiedAt without making another request
      tweet.content = content;
      tweet.lastModifiedAt = Date.now();
      setTweet(tweet);
      setEditMode(false);
    } catch (error) {
      setPostFail(true);
      console.log(error);
    }
  };

  const handleDiscardChanges = () => {
    setEditMode(false);
    setContent(tweet.content);
  };

  if (!tweet) {
    return 'Loading...';
  } 
  if (!editMode) {
    let lastModifiedAt = new Date(tweet.lastModifiedAt);
    return (
      <main
        style={{
          border: "solid 1px",
          padding: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem"
        }}
      >
        <div>
          {tweet.author.name} <span style={{color: 'gray'}}>
            on {lastModifiedAt.getFullYear()}-{lastModifiedAt.getMonth()}-{lastModifiedAt.getDate()}
          </span>
          &nbsp;
          {
            user && user._id === tweet.author._id &&
            <button onClick={handleEdit}>Edit</button>
          }
          &nbsp;
          {
            user && user._id === tweet.author._id &&
            <button onClick={handleDelete}>Delete</button>
          }
        </div>
        <p>{tweet.content}</p>
      </main>
    );
  } else {
    return (
      <form onSubmit={handleSaveChanges}>
        <div>
          <label>
            Edit Tweet
          </label>
        </div>
        <div>
          <textarea rows="10" cols="50" value={content} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleDiscardChanges}>Discard Changes</button>
          &nbsp;
          <input type="submit" value="Save changes" />
        </div>
        {
          tooLong &&
          <div style={{color: "red"}}>
            Character number limit (280) exceeded!
          </div>
        }
        {
          postFail &&
          <div style={{color: "red"}}>
            Failed to save changes. Please Try again.
          </div>
        }
      </form>
    );
  }
}
