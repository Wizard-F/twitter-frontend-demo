import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext, Navigate } from "react-router-dom";


export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerFail, setRegisterFail] = useState();
  const [user, setUser] = useOutletContext();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_TWITTER_API_DEMO + '/api/users',
        {name: username, email, password}
      );
      setUser(response.data);
    } catch (error) {
      setRegisterFail(error.response.data);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <form style={{margin: "1rem"}} onSubmit={handleSubmit}>
        <div>
          <label>
            Username
            <input
              style={{
                margin: "1rem"
              }}
              type="text"
              value={username}
              placeholder="your username"
              onChange={({target}) => setUsername(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email
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
          <button type="submit">Register</button>
        </div>
        {
          registerFail &&
          <p style={{color: 'red'}}>{registerFail}</p>
        }
      </form>
      <div style={{margin: "1rem"}}>
        Already have an account? <Link to="/login">Login here</Link>
      </div>
    </main>
  );
}