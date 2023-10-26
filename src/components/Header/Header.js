import Button from "../Button/Button";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

function Header({ style, ...props }) {
  const [blur, setBlur] = useState(false);
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const posY = window.scrollY;
      const height = window.innerHeight;

      if (posY > 0 && !blur) setBlur(true);

      if (posY == 0 && blur) setBlur(false);

      if (posY > height && !small) setSmall(true);

      if (posY <= height && small) setSmall(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [blur, small]);

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
          <Button variant={"text"}>Oppgavebeskrivelse</Button>
          <Button variant={"filled"}>Om oss</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
