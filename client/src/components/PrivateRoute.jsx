import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // If logged in → show Dashboard
  if (token) {
    return children;
  }

  // If not → go to login
  return <Navigate to="/" />;
}