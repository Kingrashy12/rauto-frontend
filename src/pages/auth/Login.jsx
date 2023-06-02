import React, { useEffect } from "react";
import { StyledLogin } from "../../styles/pages/Login.styled";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const Login = () => {
  useEffect(() => {
    document.title = "Login - RAuto";
  });
  const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log("user", user);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShowPassword(true);
    } else if (passwordType === "text") {
      setPasswordType("password");
      setShowPassword(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const loggedInResponse = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const loggedin = await loggedInResponse.json();
      if (loggedin) {
        toast.success("Login successful");
        dispatch(setLogin({ user: loggedin.user }));
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Failed: ${error.response.data}`, { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledLogin>
      <div className="w-1/3 max-[1024px]:w-1/2 max-[800px]:w-10/12 max-[700px]:w-11/12 bg-slate-800 p-3 rounded-2xl shadow-black shadow-lg justify-evenly flex flex-col items-center">
        <h2 className="text-white font-sofia text-3xl">Login</h2>
        <input
          type="text"
          className="w-10/12 p-3 rounded-lg focus:border-sky-400 outline-none font-bold font-sofia"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <div className="flex relative justify-between w-10/12 bg-white pr-2 rounded-lg items-center">
          <input
            type={passwordType}
            className="w-10/12 p-3 rounded-lg bg-transparent focus:border-none outline-none font-bold font-sofia"
            placeholder="Passowrd"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required={true}
          />
          <span onClick={handleClickShowPassword}>
            {" "}
            {showpassword ? (
              <FiEye size={25} className="cursor-pointer" />
            ) : (
              <FiEyeOff size={25} className="cursor-pointer" />
            )}
          </span>
        </div>
        <button
          className="font-bold p-2 rounded-lg w-1/2 bg-transparent border-2 disabled:cursor-not-allowed disabled:opacity-75 border-white text-white hover:bg-white hover:text-black"
          onClick={handleLogin}
          disabled={!user.email || !user.password}
        >
          {isLoading ? <ClipLoader size={23} /> : "Login"}
        </button>
        <div className="flex gap-4">
          <p
            className="font-semibold text-sky-500 hover:text-red-500 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Dont have an account ? Sign up
          </p>
          <div className="h-7 border-r-neutral-600 border-r" />
          <p
            className="font-semibold text-sky-500/ text-white hover:text-red-500 hover:underline cursor-pointer"
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
