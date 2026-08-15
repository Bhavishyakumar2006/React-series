import { login, logOut } from "../src/store/Authslice";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components/Index";
import "./App.css";
import {Outlet} from 'react-router'
import { useEffect, useState } from "react";
import authService from "../src/appwrite/Auth_service";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          useDispatch(login(userData));
        } else {
          useDispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div
      className="min-h-screen flex flex-wrap content-between
     bg-gray-400"
    >
     <Header />
     <Outlet />
     <Footer />  
    </div>
  ) : null;
}

export default App;
