import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";


export default function NewTweet() {
  const [user, setUser] = useOutletContext();
  const [content, setContent] = useState("");
  const [tooLong, setTooLong] = useState(false);
  const [postFail, setPostFail] = useState(false);
  const navigate = useNavigate();

  if (!user) {
    return 'Please log in first!';
  }

  const handleChange = (event) => {
    setContent(event.target.value);
    setTooLong(false);
    setPostFail(false);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (content.length > 280) {
      setTooLong(true);
      return;
    }
    try {
      const response = await axios.post(
        process.env.REACT_APP_TWITTER_API_DEMO + '/api/tweets',
        {content},
        {headers: {'x-auth-token': user.token}}
      );
      navigate("/", {replace: true});
    } catch (error) {
      console.log(error);
      setPostFail(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          New Tweet
        </label>
      </div>
      <div>
        <textarea rows="10" cols="50" value={content} onChange={handleChange} />
      </div>
      <div>
        <input type="submit" value="Post new tweet" />
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
          Failed to post new tweet. Please Try again.
        </div>
      }
    </form>
  );
}