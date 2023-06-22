import React, { useEffect } from "react";
import { StyledLogin } from "../../styles/pages/Login.styled";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../hooks/authSlice";
import { EmailInput, PasswordInput } from "../../libs";

const Login = () => {
  useEffect(() => {
    document.title = "Login - RAuto";
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  });

  const auth = useSelector((state) => state.auth);
  console.log("auth:", auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log("user", user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      dispatch(loginUser(user));
    } catch (error) {
      console.log(auth.loginError);
      toast.error(auth.loginError, { position: "top-center" });
    }
  };

  return (
    <StyledLogin>
      <div className="w-1/3 max-[1024px]:w-1/2 max-[800px]:w-10/12 max-[700px]:w-11/12 bg-slate-800 p-3 rounded-2xl shadow-black shadow-lg justify-evenly flex flex-col items-center">
        <h2 className="text-white font-sofia text-3xl">
          Login to your account
        </h2>
        <EmailInput
          value={user.email}
          required={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <PasswordInput
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="font-bold p-2 rounded-lg w-1/2 bg-transparent border-2 disabled:cursor-not-allowed disabled:opacity-75 border-white text-white hover:bg-white hover:text-black"
          onClick={handleLogin}
          disabled={!user.email || !user.password}
        >
          {auth.loginStatus === "pending" ? <ClipLoader size={23} /> : "Login"}
        </button>
        <div className="flex gap-4">
          <p
            className="font-semibold text-sky-500 hover:text-red-500 hover:underline cursor-pointer max-[700px]:text-xs"
            onClick={() => navigate("/register")}
          >
            Dont have an account ? Sign up
          </p>
          <div className="h-7 border-r-neutral-600 border-r" />
          <p
            className="font-semibold text-sky-500/ text-white hover:text-red-500 hover:underline cursor-pointer max-[700px]:text-xs"
            onClick={() => navigate("/auth/reset")}
          >
            Forgotten password
          </p>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
