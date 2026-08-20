import React, { useState } from "react";
import authService from "../appwrite/Auth_service";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { login } from "../store/Authslice";
import { Button, Input, Logo } from "./Index";
import { useDispatch } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const signUp = async (data) => {
    setError("");
    try {
      const userAccount = await authService.createAccount(data);
      if (userAccount) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-\[100px\]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Log In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signUp)} className="">
          <div className="space-y-5">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name.."
              {...register("Full name", {
                required: true,
              })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email.."
              {...register("email", {
                required: true,
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password.."
              {...register("password", {
                required: true,
              })}
            />
            <Button type="sumbit" children="Create Account" className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
