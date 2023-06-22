import React from "react";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, saveItem } from "../../hooks/saveSlice";

const ShortListingFeed = ({ item }) => {
  const auth = useSelector((state) => state.auth);
  const it = useSelector((state) => state.saved.savedItems);
  const i = it.find((item) => item._id === item._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function add() {
    if (!auth._id) {
      navigate("/login");
    } else {
      dispatch(saveItem(item));
    }
  }

  function del(i) {
    if (!auth) {
      navigate("/login");
    } else {
      dispatch(removeItem(i));
    }
  }

  return (
    <div className="flex flex-col bg-slate-200 rounded-lg z-0 max-[700px]:rounded-md shadow-lg cursor-pointer hover:shadow-slate-500 w-72 max-[700px]:w-44 max-[450px]:w-48 max-[400px]:w-[11.3rem] max-[370px]:w-[10rem] max-[375px]:w-[10.8rem] max-[330px]:w-[9rem] h-80">
      <img
        src={item?.pImage?.url}
        alt="Listing"
        className="w-full rounded-t-lg h-48 max-[700px]:rounded-t-md max-[700px]:h-44"
        // style={{ objectFit: "cover" }}
        onClick={() => navigate(`/listing/${item?._id}`)}
      />

      <div className="flex flex-col p-3 relative max-[700px]:p-2">
        {i ? (
          <p onClick={() => del(i)}>
            <BsFillBookmarkCheckFill className="bg-white text-4xl p-2 rounded-lg absolute -translate-y-8 cursor-pointer max-[700px]:translate-x-0 max-[700px]:text-2xl max-[700px]:rounded-sm max-[700px]:p-1 max-[700px]:-translate-y-44 translate-x-52" />
          </p>
        ) : (
          <p onClick={add}>
            <BsBookmark className="bg-white text-4xl p-2 rounded-lg absolute -translate-y-8 cursor-pointer max-[700px]:translate-x-0 max-[700px]:text-2xl max-[700px]:rounded-sm max-[700px]:p-1 max-[700px]:-translate-y-44 translate-x-52" />
          </p>
        )}

        <div className="flex gap-2 items-center max-[700px]:flex-col max-[700px]:items-start max-[350px]:gap-3">
          <span className="bg-slate-100 p-xs-s rounded-sm text-xs font-semibold">
            {item.pyear}
          </span>
          <h2 className="text-lg font-semibold max-[700px]:text-base2 max-[700px]:leading-base2H font-sofia">
            {item.pname}
          </h2>
        </div>

        <p className="text-xs font-poppin font-medium mb-5">
          {/* {item.model} */}
        </p>

        <div className="text-neutral-400 border-b border-b-neutral-300"></div>

        <h3 className="font-semibold text-2xl font-sofia mt-3 max-[700px]:text-lg max-[700px]:font-bold">
          &#8358; {item.pPrice.toLocaleString()}
        </h3>
      </div>
    </div>
  );
};

export default ShortListingFeed;
