import { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Footer.module.css";
import Dropdown from "../Dropdown/Dropdown";
import Paragraph from "../Paragraph";
import AboutDialog from "../AboutDialog/AboutDialog";
import Modal from "../Modal/Modal";
import SourcesDialog from "../SourcesDialog/SourcesDialog";

const Footer = ({ style, ...props }) => {
  const [small] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSources, setShowSources] = useState(false);

  const scrollToTop = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAbout = () => {
    console.log("TOGGLING");
    setShowAbout(!showAbout);
  };

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div
      className={styles.footer}
      style={{
        height: small ? "3rem" : "30rem",
        ...style,
      }}
      {...props}
    >
      <div className={styles.footerButton}>
        <Button onClick={() => scrollToTop("Top")} variant={"text"}>
          Til toppen
        </Button>

        <Button variant={"text"} onClick={toggleAbout}>
          Om oss
        </Button>

        <Button variant={"text"}>Bilder</Button>
        <Button variant={"text"} onClick={toggleSources}>
          Referanser
        </Button>
        <AboutDialog open={showAbout} onClose={toggleAbout} />
        <SourcesDialog onClose={toggleSources} open={showSources} />
      </div>
      <img
        src="/images/ntnulogo1.png"
        alt="Stor ntnulogo"
        style={{
          width: "25%",
          height: "auto",
          marginTop: "22%",
          display: "center",
          opacity: small ? "0" : "1",
        }}
      />
    </div>
  );
};

export default Footer;
