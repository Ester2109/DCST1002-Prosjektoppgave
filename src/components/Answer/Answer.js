import styles from "./Answer.module.css";
import { useState } from "react";
import hashCode from "../../utils/hashCode";

const Answer = ({ children, onClick, ...props }) => {
  const labelHash = hashCode(children.toString());

  return (
    <div className={styles.answer}>
      <input type="radio" id={labelHash} onClick={onClick} {...props} />
      <label for={labelHash}>{children}</label>
    </div>
  );
};

export default Answer;
