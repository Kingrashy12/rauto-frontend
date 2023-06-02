import React, { useEffect, useState } from "react";
import { StyledLogin } from "../../styles/pages/Login.styled";
import { BounceLoader, ClipLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import axios from "axios";

const Auth = () => {
  useEffect(() => {
    document.title = "Reset Password - RAuto";
  });
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleReset = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Password sent to ${email}`, { position: "top-center" });
    }, 6000);
  };

  return (
    <StyledLogin>
      <div className="w-1/3 max-[1024px]:w-1/2 max-[800px]:w-10/12 max-[700px]:w-11/12 h-1/2 max-[800px]:h-11/12 max-[350px]:h-auto bg-slate-800 p-3 rounded-2xl shadow-black shadow-lg justify-evenly flex flex-col items-center">
        <h2 className="text-white font-sofia text-3xl">Reset Password</h2>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <BounceLoader size={130} color="#fff" />
          </div>
        ) : (
          <>
            <input
              type="email"
              className="w-10/12 p-3 rounded-lg focus:border-sky-400 outline-none font-bold font-sofia"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="font-bold p-2 rounded-lg w-1/2 bg-transparent border-2 border-white disabled:cursor-not-allowed disabled:opacity-75 text-white hover:bg-white hover:text-black"
              onClick={handleReset}
              disabled={!email}
            >
              {isLoading ? <ClipLoader size={23} /> : "Send Password"}
            </button>
          </>
        )}
      </div>
    </StyledLogin>
  );
};

export default Auth;
