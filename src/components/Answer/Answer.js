import styles from "./Answer.module.css";
import { useState } from "react";
import hashCode from "../../utils/hashCode";

const Answer = ({ children, onClick, ...props }) => {
  const labelHash = hashCode(children.toString());

  return (
    <div
      className={styles.answer}
      onClick={(e) => {
        onClick(e);
      }}
    >
      <input type="radio" id={labelHash} {...props} />
      <label for={labelHash}>{children}</label>
    </div>
  );
};

export default Answer;
