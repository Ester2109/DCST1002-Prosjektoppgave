import Button from "../Button/Button";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ style, ...props }) {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const posY = window.scrollY;

      if (posY > 5 && !blur) {
        setBlur(true);
      }

      if (posY <= 5 && blur) {
        setBlur(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [blur]);

  return (
    <div
      className={styles.header}
      {...props}
      style={{
        background: blur ? "rgba(108, 108, 108, 0.5)" : "none",
        backdropFilter: blur ? "blur(10px)" : "blur(0px)",
        ...style,
      }}
    >
      <div className={styles.contentWrapper}>
        <img src="/images/ntnulogo1.png" className={styles.headerlogo}></img>
        <div className={styles.buttons}>
          <Button variant={"text"}>Oppgavebeskrivelse</Button>
          <Button variant={"filled"}>Om oss</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
