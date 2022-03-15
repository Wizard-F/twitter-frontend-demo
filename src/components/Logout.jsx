import { Navigate, useOutletContext } from 'react-router-dom'

export default function Logout() {
  const [token, setToken] = useOutletContext();
  setToken(null);
  localStorage.clear();
  return <Navigate to="/" />;
}