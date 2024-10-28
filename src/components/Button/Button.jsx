import React from "react";
import styles from "./Button.module.css";
const Button = ({ isOutline, icon, text, ...rest }) => {
  //const { isOutline, icon, text } = props; for this in arrow fun we need to write (props) like ths
  return (
    <button
      {...rest}
      className={isOutline ? styles.middle_btn : styles.primary_btn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
