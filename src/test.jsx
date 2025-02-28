import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditFilled, DeleteFilled, EyeFilled , FileAddFilled } from "@ant-design/icons";
import { Button, duration, Input, TextField } from "@mui/material";
import { Modal, message, Checkbox } from "antd";
const App = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState({});
  const Api = "https://to-dos-api.softclub.tj/api/to-dos";
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [edit, setEdit] = useState({});
  const [nameE, setNameE] = useState(edit.name);
  const [descE, setDescE] = useState(edit.description);
  const [addImg, setAddImg] = useState([]);
  const [userId, setUserId] = useState("");
  const [previews, setPreviews] = useState([]);
  useEffect(() => {
    setNameE(edit.name);
    setDescE(edit.description);
  }, [edit]);
  const [images, setImages] = useState([]);
  //modals
  const [img, setImg] = useState({});
  //Add Modal
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  //////////////////////////////////////////////
  const [openS, setOpenS] = useState(false);
  const openModalS = () => setOpenS(true);
  const closeModalS = () => setOpenS(false);
  //////////////////////////////////////////////
  const [openE, setOpenE] = useState(false);
  const openModalE = () => setOpenE(true);
  const closeModalE = () => setOpenE(false);
  /////////////////////////////////////////////
  const [openD, setOpenD] = useState(false);
  const openModalD = () => setOpenD(true);
  const closeModalD = () => setOpenD(false);
  ////////////////////////////////////////////////
  const [openP, setOpenP] = useState(false);
  const openModalP = () => setOpenP(true);
  const closeModalP = () => setOpenP(false);

  //////////////////////////
  //async funtions
  async function getByID(id) {
    try {
      const { data } = await axios.get(`${Api}/${id}`);
      setShow(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const get = async () => {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  async function deleteUser(id) {
    try {
      await axios.delete(`${Api}?id=${id}`);
      console.log("User Deleted");
      message.config({
        placement: "bottomRight",
      });
      deleteMessage();
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function postUser(user) {
    try {
      await axios.post(Api, user);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function check(id) {
    try {
      await axios.put(`https://to-dos-api.softclub.tj/completed?id=${id}`);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function putUser(user) {
    try {
      await axios.put(Api, user);
      get();
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteImageUser(id) {
    try {
      await axios.delete(`${Api}/images/${id}`);
      get();
      closeModalD();
      closeModalS();
    } catch (error) {
      console.error(error);
    }
  }
  async function postImg(images) {
    try {
      await axios.post(`${Api}/${userId}/images`, images);
      get();
      closeModalP();
    } catch (error) {
      console.error(error);
    }
  }
  ////////////////////////////////////////////////

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }
  console.log(images);

  useEffect(() => {
    handleClick();
  }, []);

  function addUser(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", desc);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    postUser(formData);
    closeModal();
    setName("");
    setDesc("");
  }
  function editUser(e) {
    e.preventDefault();
    let updateUser = {
      ...edit,
      name: nameE,
      description: descE,
    };
    putUser(updateUser);
    closeModalE();
  }
  function showF(id) {
    getByID(id);
    openModalS();
  }
  function editUserF(user) {
    setEdit(user);
    openModalE();
  }
  function deleteImage(img) {
    setImg(img);
    openModalD();
  }
  function addImageUSer(id) {
    setUserId(id);
    openModalP();
  }
  function addImgUser() {
    const formDataS = new FormData();
    for (let i = 0; i < addImg.length; i++) {
      formDataS.append("images", addImg[i]);
    }
    postImg(formDataS);
    closeModalP();
  }
  function deleteMessage() {
    setTimeout(() => {
      message.success("deleted USer");
    }, 1000);
  }
  console.log(previews);


  function prewieImages()
  {
    const newPreviews = [];
    Array.from(addImg).forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        if (newPreviews.length === addImg.length) {
          setPreviews(newPreviews);
        }
      };
    });
  }
  return (
    <>
      <div className="w-[90%] z-10 m-auto border-2 rounded-b-2xl h-[80px] top-[-5px] lg:top-0 border-t-transparent left-[22px] lg:left-[70px] dark:bg-gray-900 bg-white fixed transition-all duration-300 ease-in delay-200 flex items-center justify-between px-[20px]">
        <Button variant="contained" onClick={openModal}>
          + Add New
        </Button>
        <Modal
          open={open}
          title={"Add User"}
          footer={null}
          onCancel={closeModal}
        >
          <form action="" className="" onSubmit={addUser}>
            <TextField
              label="Name..."
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ borderRadius: "10px", margin: "10px 0px" }}
            />
            <TextField
              label="Description..."
              variant="outlined"
              fullWidth
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              sx={{ borderRadius: "10px", margin: "10px 0px" }}
            />
            <input
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
              className="w-full mx-[0px] border-gray-600 py-[10px] cursor-pointer border-1"
            />
            <div className="flex gap-[10px] lg:ml-[300px] py-[10px]">
              <Button variant="outlined" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Modal>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            className="sr-only peer"
            value=""
            type="checkbox"
            onChange={handleClick}
          />
          <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
        </label>
      </div>
      <div className="grid lg:grid-cols-2 w-[90%] place-items-center gap-[30px] mt-[100px] m-auto">
        {data.length === 0 ? (
          <h1 className="text-[50px] text-[red] absolute top-[100px] font-bold">
            NOT FOUND
          </h1>
        ) : (
          data.map((el) => (
            <div
              key={el.id}
              className="lg:w-[500px] w-[98%] m-auto lg:h-[230px] p-[20px] border-2 rounded-2xl shadow-xl flex gap-[20px]"
            >
              <div className="relative overflow-hidden w-auto  lg:h-auto h-[100px] lg:grid grid-cols-2 gap-[5px] group rounded-2xl">
                {el.images.map((img) => (
                  <img
                    key={img.id}
                    className="w-[100px] h-[100px]"
                    alt={el.name}
                    src={
                      "https://to-dos-api.softclub.tj/images/" + img.imageName
                    }
                  />
                ))}
              </div>
              <div className="lg:w-[300px] w-[100px]">
                <p className="text-[30px] font-bold overflow-hidden h-[40px]">
                  {el.name.split("").slice(0, 20).join("") + "..."}
                </p>
                <p className="text-[20px] font-bold overflow-hidden">
                  {el.description.split("").slice(0, 20).join("") + "..."}
                </p>
                <p
                  className={
                    el.isCompleted
                      ? "text-[20px] bg-green-400 w-[100px] rounded-xl text-[#fff] px-[15px] py-[10px]"
                      : "text-[20px] bg-[red] w-[100px] rounded-xl text-[#fff] px-[15px] py-[10px]"
                  }
                >
                  {el.isCompleted ? "Active" : "Inactive"}
                </p>
                <div className="flex gap-[10px] mt-[10px]">
                  <DeleteFilled
                    style={{ color: "red", fontSize: "25px" }}
                    className="text-[red]"
                    onClick={() => deleteUser(el.id)}
                  >
                    Delete
                  </DeleteFilled>
                  <EditFilled
                    style={{
                      color: "blue",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() => editUserF(el)}
                  />
                  <EyeFilled
                    style={{
                      color: "#03d3fc",
                      fontSize: "25px",
                      cursor: "pointer",
                    }}
                    onClick={() => showF(el.id)}
                  />
                  <FileAddFilled onClick={() => addImageUSer(el.id)} style={{cursor : "pointer"}}/>
                  <Checkbox
                    type="checkbox"
                    className="text-white p-[20px] cursor-pointer"
                    checked={el.isCompleted}
                    onChange={() => check(el.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Modal
        className=""
        title={"Show User"}
        open={openS}
        onCancel={closeModalS}
      >
        {show ? (
          <div className="">
              <p className="text-[red] font-bold text-[20px]">Delete Images ↡ click on the image to delete it ↡</p>
            <div className="flex gap-[10px] items-center overflow-x-auto">
              {show.images?.map((img) => (
                <img
                  key={img.id}
                  className="w-[100px] h-[100px] cursor-pointer"
                  alt={img.name}
                  src={"https://to-dos-api.softclub.tj/images/" + img.imageName}
                  onClick={() => deleteImage(img)}
                />
              ))}
            </div>
            <h1 className="text-[30px] font-bold">Name : {show.name}</h1>
            <p className="text-[20px]">Description : {show.description}</p>
          </div>
        ) : (
          <p className="text-[20px] font-bold">Loading...</p>
        )}
      </Modal>
      <Modal
        open={openE}
        title={"Edit User"}
        footer={null}
        onCancel={closeModalE}
      >
        <form action="" className="" onSubmit={editUser}>
          <TextField
            label="Name..."
            variant="outlined"
            fullWidth
            value={nameE}
            onChange={(e) => setNameE(e.target.value)}
            sx={{ borderRadius: "10px", margin: "10px 0px" }}
          />
          <TextField
            label="Description..."
            variant="outlined"
            fullWidth
            value={descE}
            onChange={(e) => setDescE(e.target.value)}
            sx={{ borderRadius: "10px", margin: "10px 0px" }}
          />
          <div className="flex gap-[10px] lg:ml-[300px] py-[10px]">
            <Button variant="outlined" onClick={closeModalE}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        open={openD}
        onCancel={closeModalD}
        onOk={() => deleteImageUser(img.id)}
        title={"Delete Image"}
      >
        <div className="">
          <h1 className="text-[20px] font-bold">
            Are You shoured delete :{" "}
            <span className="text-[red]">({img.imageName})</span>
          </h1>
          <h1 className="font-bold text-[14px]">img Id : {img.id}</h1>
          <img
            src={`https://to-dos-api.softclub.tj/images/${img.imageName}`}
            alt=""
          />
        </div>
      </Modal>
      <Modal
        title={"Add Image"}
        open={openP}
        onCancel={closeModalP}
        onOk={addImgUser}
      >
        <input
          type="file"
          multiple
          className="border-2 rounded-2xl w-full py-[10px] cursor-pointer px-[10px]"
          onChange={(e) => setAddImg(e.target.files)}
        />
        <Button variant="contained" style={{margin : "10px 0px"}} onClick={prewieImages}>Prewie</Button>
        <div className="overflow-scroll flex gap-[10px] mt-[10px] items-center">
        {previews.map((src, index) => (
            <img key={index} src={src} alt="preview" className="w-[100px] h-[100px] rounded" />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default App;
