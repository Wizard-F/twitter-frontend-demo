import axios from "axios";
import { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [user, setUser] = useOutletContext();

  const handleSubmit = async event => {
    event.preventDefault();
    let response;
    try {
      response = await axios.post(
        process.env.REACT_APP_TWITTER_API_DEMO + '/api/auth',
        {email: email, password: password}
      );
      setUser(response.data);
    } catch (e) {
      setInvalid(true);
      setEmail("");
      setPassword("");
      console.log(response);
    }
  };
  
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <form style={{margin: "1rem"}} onSubmit={handleSubmit}>
      <div>
        <label>
          Email {}
          <input
            style={{
              margin: "1rem"
            }}
            type="text"
            value={email}
            placeholder="your email"
            onChange={({target}) => setEmail(target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            style={{
              margin: "1rem"
            }}
            type="text"
            value={password}
            placeholder="your password"
            onChange={({target}) => setPassword(target.value)}
          />
        </label>
      </div>
      <div style={{margin: "1rem"}}>
        <button type="submit">Login</button>
      </div>
      <p style={{color: 'red'}}>{invalid ? 'INVALID' : null}</p>
    </form>
  );
}
