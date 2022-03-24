import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Login = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [formInput, setFormInput] = useState({});

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
      setImage({
        preview: url,
        raw: e.target.files[0],
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const handleSubmit = () => {
    console.log(formInput);
  };

  return (
    <div className="">
      <p>Create Next App</p>
      <form onSubmit={handleSubmit} action="#">
        <p>{fileUrl}</p>
        {image.preview ? (
          <img
            src={image.preview}
            alt="dummy"
            className="h-32 w-32 object-cover rounded-xl"
          />
        ) : (
          <div className="h-32 w-32 z-10 flex justify-center items-center rounded-xl"></div>
        )}
        <input type="file" onChange={handleImageChange} />
        <input
          type="text"
          className="border-2 border-black"
          onChange={(e) => {
            setFormInput({ ...formInput, email: e.target.value });
          }}
        />
        <input
          type="text"
          className="border-2 border-black"
          onChange={(e) => {
            setFormInput({ ...formInput, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
