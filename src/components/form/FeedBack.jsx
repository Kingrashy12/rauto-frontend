import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Male } from "../../asset";
import { toast } from "react-toastify";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { BASE_URL } from "../../hooks/api";

const FeedBack = ({ itemId }) => {
  const auth = useSelector((state) => state.auth);
  const [Loading, setLoading] = useState(false);
  const [feedText, setFeedText] = useState("");

  const hanldeComment = async () => {
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/feedback/add/${itemId}`, {
        body: feedText,
        userId: auth._id,
        listingId: itemId,
      });

      toast.success(`feedback added`);
    } catch (error) {
      console.log({ error: error.message });
      toast.error({ error: error.message }, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      <div className="flex justify-between flex-shrink relative gap-3">
        <img
          src={auth?.userProfile || Male}
          alt="Male User"
          className="w-14 h-14 rounded-full max-[700px]:w-9 max-[700px]:h-9"
        />
        <input
          type="text"
          placeholder={`What your feedback, ${auth?.name}?`}
          value={feedText}
          onChange={(e) => setFeedText(e.target.value)}
          className="p-2 rounded-lg font-sofia outline-none border max-[700px]:rounded-md bg-slate-300 placeholder:text-black text-black focus:border-sky-500 w-full"
        />
        <button
          className="bg-black p-1 relative max-[700px]:rounded-md font-sofia outline-none border-none text-white rounded-lg cursor-pointer"
          onClick={hanldeComment}
        >
          {Loading ? <ClipLoader size={23} color="#fff" /> : "Comment"}
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
