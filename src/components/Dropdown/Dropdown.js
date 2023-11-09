import { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  children,
  style,
  isVisible,
  onClose,
  referenceElement,
  ...props
}) => {
  const refElement = referenceElement?.current;
  console.log(isVisible);
  useEffect(() => {
    const scrollHandler = () => {
      onClose();
      window.removeEventListener("scroll", scrollHandler);
    };

    if (!isVisible) return;
    window.addEventListener("scroll", scrollHandler);
  }, [isVisible]);

  if (!refElement) return;
  const boundingRect = refElement.getBoundingClientRect();

  console.log("MY COMP", referenceElement?.current);

  return (
    <div
      className={styles.dropdown}
      style={{
        display: isVisible ? "block" : "none",
        top: boundingRect.y + "px",
        left: boundingRect.x + "px",
      }}
      {...props}
    >
      <button onClick={onClose}>Skjul Dropdown</button>
      {children}
    </div>
  );
};

export default Dropdown;
