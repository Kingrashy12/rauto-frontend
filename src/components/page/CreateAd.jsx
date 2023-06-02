import React, { useEffect, useRef, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { carcondition, colorfilter, pfilter } from "../../data/productfilter";
import { toast } from "react-toastify";
import { yearrange } from "../../data/productfilter";
import { bodytype } from "../../data/productfilter";
import { TextField } from "@mui/material";
import { GoDiffAdded } from "react-icons/go";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { CreateListing } from "../../hooks/ListingSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateAd = () => {
  const auth = useSelector((state) => state.auth);
  const list = useSelector((state) => state.listing);
  const [personName, setPersonName] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("values are", value);
  const imgRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (list.createStatus === "success") {
      navigate("/");
    }
  });

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const [photo, setPhoto] = useState(null);
  const onImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
        setPost({ ...post, pImage: reader.result });
      };
    } else {
      setPhoto("");
    }
  };
  const [post, setPost] = useState({
    userId: auth._id,
    pname: "",
    pcolor: "",
    pPrice: "",
    pImage: "",
    pdesc: "",
    pyear: "",
    pbody: "",
    pcondition: "",
    pmake: "",
  });
  console.log("pos", post);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      dispatch(CreateListing(post));
    } catch (error) {
      console.log({ error: error.response.data });
      toast.error(`Sell order Failed Reason: ${error.response.data}`, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="font-sofia max-[700px]:text-xl font-bold text-3xl">
        Sell your Car
      </h1>
      <div className="flex bg-slate-50 w-1/2 max-[700px]:w-11/12 p-2 rounded-lg shadow-sm shadow-black">
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Make</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={personName}
              onChange={(e) => {
                setPersonName(e.target.value);
              }}
              input={<OutlinedInput label="Make" />}
              // renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {pfilter.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.value}
                  onClick={(e) => {
                    setValue(name.value);
                    setPost({ ...post, pmake: name.value });
                    toast.info(`You Selected ${name.value}`, {
                      position: "top-center",
                    });
                  }}
                >
                  {/* <Checkbox checked={name.text.indexOf(name.text) > 1} /> */}
                  <ListItemText primary={name.text} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Color</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Color" />}
              // renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {colorfilter.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.value}
                  onClick={(e) => {
                    setValue(name.value);
                    setPost({ ...post, pcolor: name.value });
                    toast.info(`You Selected ${name.value}`, {
                      position: "top-center",
                    });
                  }}
                >
                  {/* <Checkbox checked={name.text.indexOf(name.text) > 1} /> */}
                  <ListItemText primary={name.label} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Year</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Year" />}
              // renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {yearrange.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.value}
                  onClick={(e) => {
                    setValue(name.value);
                    setPost({ ...post, pyear: name.value });
                    toast.info(`You Selected ${name.value}`, {
                      position: "top-center",
                    });
                  }}
                >
                  {/* <Checkbox checked={name.text.indexOf(name.text) > 1} /> */}
                  <ListItemText primary={name.text} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">BodyType</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="BodyType" />}
              // renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {bodytype.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.value}
                  onClick={(e) => {
                    setValue(name.value);
                    setPost({ ...post, pbody: name.value });
                    toast.info(`You Selected ${name.value}`, {
                      position: "top-center",
                    });
                  }}
                >
                  {/* <Checkbox checked={name.text.indexOf(name.text) > 1} /> */}
                  <ListItemText primary={name.text} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Condition</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              // multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Condition" />}
              // renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {carcondition.map((name, index) => (
                <MenuItem
                  key={index}
                  value={name.value}
                  onClick={(e) => {
                    setValue(name.value);
                    setPost({ ...post, pcondition: name.value });
                    toast.info(`You Selected ${name.value}`, {
                      position: "top-center",
                    });
                  }}
                >
                  {/* <Checkbox checked={name.text.indexOf(name.text) > 1} /> */}
                  <ListItemText primary={name.text} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {photo ? (
            <img
              src={photo}
              alt="PostImage"
              className="w-36 mb-2 mt-2 rounded-md"
            />
          ) : (
            <GoDiffAdded
              className="text-6xl cursor-pointer"
              onClick={() => {
                imgRef.current.click();
              }}
            />
          )}
          <div className="hidden">
            <input type="file" ref={imgRef} onChange={onImageChange} />
          </div>
          <div className="flex justify-between max-[800px]:flex-col max-[800px]:gap-3">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setPost({ ...post, pname: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              onChange={(e) => setPost({ ...post, pPrice: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              label="Short Description"
              variant="outlined"
              onChange={(e) => setPost({ ...post, pdesc: e.target.value })}
            />
          </div>
          <button
            className="bg-black p-2 rounded-lg text-white border-2 border-black hover:text-black font-sofia font-bold hover:bg-transparent cursor-pointer items-center justify-center flex mt-2 w-full"
            onClick={handleSubmit}
          >
            {list.createStatus === "pending" ? (
              <ClipLoader size={23} color="aqua" />
            ) : (
              "Sell My Car"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;
