import { Backdrop, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Male } from "../../asset";
import { ImageModal } from "../../libs";
import { BASE_URL } from "../../hooks/api";
import { useDispatch, useSelector } from "react-redux";
import { EditUserProfile } from "../../hooks/authSlice";

const EditForm = ({ u, setOpen }) => {
  const [photo, setPhoto] = useState("");
  const [gallery, setGallery] = useState(false);
  const [profile, setProfile] = useState("");
  const imgRef = useRef();
  const userId = u._id;
  const auth = useSelector((state) => state.auth);
  const loading = auth.editStatus === "pending";
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: u.name,
    email: u.email,
    username: u.username,
    userProfile: "",
  });

  console.log("user:", user);

  const handleSubmit = async () => {
    dispatch(EditUserProfile({ userId, user }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setGallery(true);
    }
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setUser({ ...user, userProfile: reader.result });
      };
    } else {
      setPhoto("");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-3 w-full relative">
        <div className="flex flex-col mb-9">
          {profile ? (
            <img
              src={profile}
              alt="Male"
              className="w-full h-44 cursor-pointer hover:opacity-80 hover:fill-black"
              style={{ objectFit: "cover" }}
              onClick={() => {
                imgRef.current.click();
                setGallery(true);
              }}
            />
          ) : (
            <img
              src={u?.userProfile || Male || profile}
              alt="Male"
              className="w-full h-44 cursor-pointer hover:opacity-80 hover:fill-black"
              style={{ objectFit: "cover" }}
              onClick={() => {
                imgRef.current.click();
                setGallery(true);
              }}
            />
          )}
          <div className="hidden">
            <input
              type="file"
              //   accept="Image/"
              ref={imgRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="text-black font-bold font-sofia"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="text-black font-bold font-sofia"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.name })}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="text-black font-bold font-sofia"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button
          className="bg-black p-2 rounded-lg text-white hover:bg-transparent hover:text-black border-black border-2 font-bold font-sofia"
          onClick={handleSubmit}
        >
          {loading ? <ClipLoader size={23} color="aqua" /> : "Save"}
        </button>
      </div>
      {gallery && (
        <Backdrop open={gallery} className="relative">
          <div className="fixed w-full h-full flex items-center justify-center z-z-70">
            <ImageModal
              gallery={gallery}
              setGallery={setGallery}
              photo={photo}
              setPhoto={setPhoto}
              setProfile={setProfile}
            />
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default EditForm;
