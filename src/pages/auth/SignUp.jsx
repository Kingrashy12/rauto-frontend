import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../hooks/authSlice";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";

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
    <div className="flex flex-col w-full px-[35rem] gap-[1rem] relative justify-center /items-center h-[70vh] max-[1024px]:px-[9rem] max-[700px]:px-[1.5rem]">
      <Typography
        component="h1"
        fontSize="xl2"
        fontWeight="lg"
        fontFamily="'Russo One', sans-serif"
      >
        Sign Up on RAuto
      </Typography>

      <FormControl required>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </FormControl>

      <p
        className="font-semibold font-sofia cursor-pointer text-blue-600 hover:underline"
        onClick={() => navigate("/login")}
      >
        Already have an account ? Login
      </p>
      <Button
        onClick={hanldeSubmit}
        disabled={!user.email || !user.password}
        className="bg-blue-600 disabled:cursor-not-allowed"
      >
        {auth.registerStatus === "pending" ? (
          <ClipLoader size={23} />
        ) : (
          "Register"
        )}
      </Button>
    </div>
  );
};

export default SignUp;
