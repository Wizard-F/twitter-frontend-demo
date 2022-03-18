import { useEffect } from 'react';
import { Navigate, useOutletContext } from 'react-router-dom'

export default function Logout() {
  const [user, setUser] = useOutletContext();
  useEffect(() => {
    setUser(null);
    localStorage.removeItem('user');
  });
  
  return <Navigate to="/" />;
}