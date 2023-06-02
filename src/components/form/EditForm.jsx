import { Backdrop, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Male } from "../../asset";
import { CoverModal, ImageModal } from "../../libs";

const EditForm = ({ u, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [cphoto, setCPhoto] = useState("");
  const [gallery, setGallery] = useState(false);
  const [cgallery, setCGallery] = useState(false);
  const [profile, setProfile] = useState("");
  const [cover, setCover] = useState("");
  const imgRef = useRef();
  const coverRef = useRef();
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
      await axios.patch(`http://localhost:4000/users/${userId}/edit`, {
        userId: userId,
        name: user.name,
        email: user.email,
        username: user.username,
        userProfile: profile,
        userCover: cover,
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

  const onCoverImageChange = (e) => {
    const cfile = e.target.files[0];
    console.log(cfile);
    if (cfile) {
      setCGallery(true);
    }
    TransformCoverFile(cfile);
  };

  const TransformCoverFile = (cfile) => {
    const reader = new FileReader();
    if (cfile) {
      reader.readAsDataURL(cfile);
      reader.onloadend = () => {
        setCPhoto(reader.result);
      };
    } else {
      setCPhoto("");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-3 w-full relative">
        <div className="flex flex-col mb-9">
          {cover ? (
            <img
              src={cover}
              alt="Male"
              className="w-full h-44 cursor-pointer hover:opacity-80 hover:fill-black"
              style={{ objectFit: "cover" }}
              onClick={() => {
                coverRef.current.click();
                setCGallery(true);
              }}
            />
          ) : (
            <img
              src={u?.userCover || Male || profile}
              alt="Male"
              className="w-full h-44 cursor-pointer hover:opacity-80 hover:fill-black"
              style={{ objectFit: "cover" }}
              onClick={() => {
                coverRef.current.click();
                setCGallery(true);
              }}
            />
          )}
          {profile ? (
            <img
              src={profile}
              alt="Male"
              onClick={() => {
                imgRef.current.click();
                setGallery(true);
              }}
              className="w-28 rounded-full border-4 border-black absolute top-28 left-9 h-28 cursor-pointer hover:opacity-80"
            />
          ) : (
            <img
              src={u?.userProfile || Male}
              alt="Male"
              onClick={() => {
                imgRef.current.click();
                setGallery(true);
              }}
              className="w-28 rounded-full border-4 border-black absolute top-28 left-9 h-28 cursor-pointer hover:opacity-80"
            />
          )}
          <div className="hidden">
            <input
              type="file"
              //   accept="Image/"
              ref={imgRef}
              onChange={onImageChange}
            />
            <input
              type="file"
              //   accept="Image/"
              ref={coverRef}
              onChange={onCoverImageChange}
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
      {cgallery && (
        <Backdrop open={cgallery} className="relative">
          <div className="fixed w-full h-full flex items-center justify-center z-z-70">
            <CoverModal
              setCGallery={setCGallery}
              cphoto={cphoto}
              setCover={setCover}
            />
          </div>
        </Backdrop>
      )}
    </>
  );
};

export default EditForm;
