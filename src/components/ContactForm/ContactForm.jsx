import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Name@gmail.com");
  const [text, setText] = useState("having fun in the coding");
  // //  js code for onclick function
  // const onViacallClick = () => {
  //   console.log("I am via call clicked");
  // }; end here

  // if we click on Submit Button we need to lock the data for that we need do following
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // // to check the value which is displayed on after submittng
    // console.log("name", event.target[0].value);
    // console.log("email", event.target[1].value);
    // console.log("text", event.target[2].value); end here
    // now by using hook i.e useState
    setName(event.target[0].value);
    setEmail(event.target[1].value);

    setText(event.target[2].value);

    console.log({
      name,
      email,
      text,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            // onClick={onViacallClick}
            text="VIA CALL"
            icon={<MdCall fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMailOutline fontSize="24px" />}
        />
        {/* for input sections like name, Email,Text */}
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="textarea">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT"></Button>
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/service.png" />
      </div>
    </section>
  );
};

export default ContactForm;
