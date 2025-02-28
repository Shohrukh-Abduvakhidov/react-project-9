import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditFilled, DeleteFilled, EyeFilled } from "@ant-design/icons";
import { Button, TextField } from "@mui/material";
import { Modal, message, Checkbox } from "antd";

const App = () => {
  const [data, setData] = useState([]);
  const Api = "https://to-dos-api.softclub.tj/api/to-dos";
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [addImg, setAddImg] = useState([]);
  const [userId, setUserId] = useState("");
  const [previews, setPreviews] = useState([]);
  const [openP,setOpenP] = useState(false)
  const openModalP = () => setOpenP(true)
  const closeModalP = () => setOpenP(false)
  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      const { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  async function postImg(images) {
    try {
      await axios.post(`${Api}/${userId}/images`, images);
      get();
      closeModalP();
    } catch (error) {
      console.error(error);
    }
  }

  function addImgUser() {
    const formDataS = new FormData();
    for (let i = 0; i < addImg.length; i++) {
      formDataS.append("images", addImg[i]);
    }
    
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

    postImg(formDataS);
  }

  return (
    <>
      <Button variant="contained" onClick={() => setOpenP(true)}>
        + Add Image
      </Button>
      <Modal title={"Add Image"} open={openP} onCancel={() => setOpenP(false)} onOk={addImgUser}>
        <input
          type="file"
          multiple
          className="border-2 rounded-2xl w-full py-[10px] cursor-pointer px-[10px]"
          onChange={(e) => setAddImg(e.target.files)}
        />
        <div className="flex gap-[10px] items-center mt-4">
          {previews.map((src, index) => (
            <img key={index} src={src} alt="preview" className="w-[100px] h-[100px] rounded" />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default App;
