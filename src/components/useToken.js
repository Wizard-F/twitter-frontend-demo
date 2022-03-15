import { useState } from "react";

export default function useToken() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const saveToken = token => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  return [token, saveToken];
}