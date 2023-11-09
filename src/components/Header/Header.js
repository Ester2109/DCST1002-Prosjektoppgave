import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Header.module.css";
import TaskDialog from "../TaskDialog/TaskDialog";
import { useEffect, useMemo, useRef, useState } from "react";
import AboutDialog from "../AboutDialog/AboutDialog";

function Header({ style, ...props }) {
  const [blur, setBlur] = useState(false);
  const [small, setSmall] = useState(false);
  const [taskVisible, setTaskVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const posY = window.scrollY;
      const height = window.innerHeight;

      if (posY > 0 && !blur) setBlur(true);

      if (posY === 0 && blur) setBlur(false);

      if (posY > height && !small) setSmall(true);

      if (posY <= height && small) setSmall(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [blur, small]);

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const toggleTask = () => {
    setTaskVisible(!taskVisible);
  };

  return (
    <div
      className={styles.header}
      {...props}
      style={{
        background: blur ? "rgba(108, 108, 108, 0.5)" : "none",
        backdropFilter: blur ? "blur(10px)" : "blur(0px)",
        height: small ? "3rem" : "5rem",
        ...style,
      }}
    >
      <div className={styles.contentWrapper}>
        {small ? (
          <img
            src="/images/ntnulogo.png"
            alt="Liten ntnulogo"
            style={{
              height: "70%",
            }}
          />
        ) : (
          <img
            src="/images/ntnulogo1.png"
            alt="Stor ntnulogo"
            className={styles.headerlogo}
          />
        )}

        <div
          className={styles.buttons}
          style={{
            opacity: small ? "0" : "1",
          }}
        >
          <Button variant={"text"} onClick={toggleTask}>
            Oppgavebeskrivelse
          </Button>
          <Button variant={"filled"} onClick={toggleAbout}>
            Om oss
          </Button>
          <TaskDialog open={taskVisible} onClose={toggleTask} />
          <AboutDialog open={aboutVisible} onClose={toggleAbout} />
        </div>
      </div>
    </div>
  );
}

export default Header;
