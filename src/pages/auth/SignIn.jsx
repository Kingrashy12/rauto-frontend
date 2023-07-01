import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../hooks/authSlice";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const SignIn = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log("auth:", auth);

  useEffect(() => {
    document.title = "Login - RAuto";
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  });
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
    <div className="flex flex-col w-full px-[35rem] gap-[1rem] relative justify-center /items-center h-[70vh] max-[1024px]:px-[9rem] max-[700px]:px-[1.5rem]">
      <div className="flex flex-col gap-1">
        <Typography
          component="h1"
          fontSize="xl2"
          fontWeight="lg"
          fontFamily="'Russo One', sans-serif"
        >
          Sign in to your account
        </Typography>
        <Typography
          level="body2"
          sx={{ my: 1, mb: 3, fontWeight: "500" }}
          fontFamily="'Roboto Condensed', sans-serif"
          fontWeight={500}
        >
          Welcome back
        </Typography>
      </div>
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
        onClick={() => navigate("/register")}
      >
        Don't have an account? Signup
      </p>

      <Button
        onClick={handleLogin}
        disabled={!user.email || !user.password}
        className="bg-blue-600 disabled:cursor-not-allowed"
      >
        {auth.loginStatus === "pending" ? <ClipLoader size={23} /> : "Sign in"}
      </Button>
    </div>
  );
};

export default SignIn;
