import uploadPhoto from "../assets/images/add_photo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styles from "./Auth.module.css";

function Auth() {
  const [isPhoto, setIsPhoto] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [userImage, setUserImage] = useState(
    localStorage.getItem("image") || uploadPhoto
  );
  const [isInfo, setIsInfo] = useState(false);
  const navigate = useNavigate();
  const userName = useRef();
  const image = useRef();

  useEffect(() => {
    if (image.current.value && userName.current.value) {
      // console.log(image.current.value);
      // setIsSubmit(true);
      setIsInfo(false);
    }
    setIsInfo(true);
  }, [image.current?.value, userName.current?.value]);

  function handleChange(e) {
    if (image.current) {
      const file = e.target.files[0];
      console.log(file);
      const imgUrl = URL.createObjectURL(file);
      setIsPhoto(true);
      setUserImage(imgUrl); // Update the userImage state with the new image URL
      localStorage.setItem("image", imgUrl);
      console.log(imgUrl);
    }
  }

  function addName() {
    const enteredName = userName.current.value;
    localStorage.setItem("name", enteredName);
    console.log(enteredName);
  }

  function handleSubmit(e) {
    setIsInfo(false);
    e.preventDefault();
    if (image.current.value && userName.current.value) {
      setIsInfo(true);
      navigate("/form", { replace: true });
    }
  }

  return (
    <form name="auth" className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="inputTag">
        <input id="inputTag" type="file" onChange={handleChange} ref={image} />
        <img
          className={isPhoto ? styles.upload : styles.icon}
          alt="upload your photo"
          src={isPhoto ? userImage : uploadPhoto}
        />
      </label>

      <label htmlFor="user">Fill in your name</label>

      <input
        id="user"
        onChange={addName}
        ref={userName}
        type="text"
        placeholder="Your name"
        spellCheck="false"
      />
      <button type="submit" className={styles.btn}>
        Sign In
      </button>
      {isInfo ? (
        " "
      ) : (
        <p className={styles.submit_err}>enter your information!</p>
      )}
    </form>
  );
}

export default Auth;
