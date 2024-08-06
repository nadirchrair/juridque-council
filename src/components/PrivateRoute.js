// src/components/PrivateRoute.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../Features/authSlice";
export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      // Check if token is in local storage
      const localStorageToken = localStorage.getItem('token');
      if (localStorageToken) {
        // Update Redux state with the token from local storage
        dispatch(setToken(localStorageToken));
      } else {
        // If no token in Redux state and local storage, navigate to login
        navigate("/login");
      }
    }
  }, [token, navigate, dispatch]);

  return token ? children : null;
}
