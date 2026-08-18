import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth_service";
import { logOut, LogOut } from "../../store/Authslice";

function LogOutBtn() {
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    authService.logout().then(() => dispatch(logOut()));
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogOutBtn;
