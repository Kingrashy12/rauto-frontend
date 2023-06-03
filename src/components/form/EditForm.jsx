import { Backdrop, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Male } from "../../asset";
import { ImageModal } from "../../libs";
import { BASE_URL } from "../../hooks/api";

const EditForm = ({ u, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [gallery, setGallery] = useState(false);
  const [profile, setProfile] = useState("");
  const imgRef = useRef();
  const userId = u._id;
  const [user, setUser] = useState({
    name: u.name,
    email: u.email,
    username: u.username,
  });

  console.log("user:", user);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.patch(`${BASE_URL}/users/${userId}/edit`, {
        userId: userId,
        name: user.name,
        email: user.email,
        username: user.username,
        userProfile: profile,
      });
      toast.success(`Info Updated`, { position: "top-center" });
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error({ error: error.message });
    } finally {
      setLoading(false);
    }
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
