import React, { useEffect } from "react";
import { StyledSignUp } from "../../styles/pages/SignUp.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../hooks/authSlice";

const SignUp = () => {
  useEffect(() => {
    document.title = "Register - RAuto";
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  console.log("user", user);
  const [showpassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleClickShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShowPassword(true);
    } else if (passwordType === "text") {
      setPasswordType("password");
      setShowPassword(false);
    }
  };

  const hanldeSubmit = async () => {
    setLoading(true);
    try {
      dispatch(registerUser(user));

      toast.success(`Your account have been created ${user.username}`, {
        position: "top-center",
      });
      if (auth?._id) {
        navigate("/");
      }
    } catch (error) {
      toast.error(`Failed: ${error.response.data}`, {
        position: "top-center",
      });
      console.log({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledSignUp>
      <div className="w-1/3 max-[1024px]:w-1/2 h-auto max-[800px]:w-10/12 max-[700px]:w-11/12 relative bg-slate-800 p-3 rounded-2xl shadow-black shadow-lg justify-evenly flex flex-col items-center">
        <h2 className="text-white font-share font-bold text-3xl">Regsiter</h2>
        <input
          type="text"
          className="w-10/12 p-3 rounded-lg focus:border-sky-400 outline-none font-bold font-sofia"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
          required
        />
        <input
          type="text"
          className="w-10/12 p-3 rounded-lg focus:border-sky-400 outline-none font-bold font-sofia"
          placeholder="Username"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          className="w-10/12 p-3 rounded-lg focus:border-sky-400 outline-none font-bold font-sofia"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <div className="flex relative justify-between w-10/12 bg-white pr-2 rounded-lg items-center">
          <input
            type={passwordType}
            className="w-10/12 p-3 rounded-lg bg-transparent focus:border-none outline-none font-bold font-sofia"
            placeholder="Passowrd"
            required={true}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
          className="font-bold p-2 rounded-lg w-1/2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
          onClick={hanldeSubmit}
        >
          {loading ? <ClipLoader size={23} /> : "Register"}
        </button>
        <p
          className="font-semibold text-sky-500 hover:text-red-500 hover:underline cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account ? Login
        </p>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
