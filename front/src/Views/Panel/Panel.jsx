import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import usePing from "../../hooks/usePing";
import Spinner from "../../Components/Spinner/Spinner";
import "./Panel.css";
import Sidebar from "../../Components/SideBar/SideBar";

function Panel() {
  const { ping, isLoading } = usePing();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    const checkToken = async () => {
      try {
        const connect = await ping("/auth/token", token);
        if (!connect) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    };

    checkToken();
  }, []);

  return (
    <div className="panel-container">
      <Sidebar />
      <div className="panel-content">
        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div>
            <h1>Panel</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panel;
