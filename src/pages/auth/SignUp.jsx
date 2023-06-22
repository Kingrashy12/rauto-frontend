import React, { useEffect } from "react";
import { StyledSignUp } from "../../styles/pages/SignUp.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../hooks/authSlice";
import { EmailInput, PasswordInput, TextInput } from "../../libs";

const SignUp = () => {
  useEffect(() => {
    document.title = "Register - RAuto";
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  console.log("user", user);

  const hanldeSubmit = async () => {
    try {
      dispatch(registerUser(user));

      toast.success(`Your account have been created ${user.username}`, {
        position: "top-center",
      });
      if (auth._id) {
        navigate("/");
      }
    } catch (error) {
      toast.error(auth.registerError, {
        position: "top-center",
      });
      console.log({ error: error.message });
    }
  };

  return (
    <StyledSignUp>
      <div className="w-1/3 max-[1024px]:w-1/2 h-auto max-[800px]:w-10/12 max-[700px]:w-11/12 relative bg-slate-800 p-3 rounded-2xl shadow-black shadow-lg justify-evenly flex flex-col items-center">
        <h2 className="text-white font-sofia font-bold text-3xl">Regsiter</h2>
        <TextInput
          required={user.name}
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          name="name"
          placeholder="Name"
        />
        <TextInput
          value={user.username}
          required={user.username}
          name="u-n"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
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
          className="font-bold p-2 rounded-lg w-1/2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
          onClick={hanldeSubmit}
        >
          {auth.registerStatus === "pending" ? (
            <ClipLoader size={23} />
          ) : (
            "Register"
          )}
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
