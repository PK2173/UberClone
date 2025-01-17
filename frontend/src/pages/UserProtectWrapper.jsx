import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoading, setisLoading] = useState(true);
  const {users, setUsers} = React.useContext(UserDataContext)

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
          setisLoading(false);
        }
      })
      .catch((err) => {
        const data = err.response.data || '';
        alert(data.message || 'try again');        
        // alert(err.response.data.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default UserProtectWrapper;
