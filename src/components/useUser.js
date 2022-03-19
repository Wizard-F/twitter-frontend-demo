import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const saveUser = user => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return [user, saveUser];
}