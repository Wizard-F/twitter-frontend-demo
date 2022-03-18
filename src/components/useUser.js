import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(localStorage.getItem('user'));

  const saveUser = user => {
    localStorage.setItem('user', user);
    setUser(user);
  };

  return [user, saveUser];
}