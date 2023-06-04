import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Male } from "../../asset";
import { FeedbackForm } from "../../components";

const Feedback = ({ open, setOpen, item }) => {
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    if (item?.comment?.length === 0) {
      setEmpty(true);
    }
  }, [item?.comment?.length]);
  return (
    <div
      className={`relative w-1/3 max-[800px]:w-10/12 bg-white max-[700px]:w-11/12 ${
        empty ? "" : "overflow-y-scroll"
      } h-80% z-z-70`}
    >
      <div className="flex justify-between fixed bg-white z-z-70 shadow-md shadow-black w-1/3 max-[800px]:w-10/12 max-[700px]:w-11/12 rounded-t-lg p-4">
        <p className="text-xl font-sofia">Feedbacks on {item?.pname}</p>
        <IoMdClose
          size={30}
          className="cursor-pointer p-1 bg-neutral-400 rounded-full"
          onClick={() => setOpen(false)}
        />
      </div>
      {empty ? (
        <div className="flex flex-col relative bg-white rounded-t-lg justify-center h-full items-center w-full z-50">
          <p className="text-2xl text-neutral-400 font-sofia font-bold">
            No Feedback for {item.pname}
          </p>
          <p className="text-lg font-sofia font-semibold">
            Be the first to give feedback about this listing
          </p>
        </div>
      ) : (
        <div className="flex flex-col relative bg-white h-auto mt-4 p-9 w-full z-50">
          <hr className="mt-2 mb-2" />
          <div className="">
            {item?.comment?.map((c) => (
              <div className="bg-slate-200 rounded-lg mb-2">
                <div className="flex flex-col p-3 justify-between">
                  <div className="flex text-justify items-center gap-2">
                    <img
                      src={c?.userProfile || Male}
                      alt="Comment"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-base font-sofia">{c.name}</p>
                  </div>
                  <p className="text-xl font-sofia">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="fixed z-z-70 bg-white w-1/3 max-[800px]:w-10/12 max-[700px]:w-11/12 rounded-b-lg shadow shadow-black bottom-8 p-3">
        <FeedbackForm itemId={item._id} />
      </div>
    </div>
  );
};

export default Feedback;
