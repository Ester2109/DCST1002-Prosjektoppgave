import { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./Footer.module.css";
import Dropdown from "../Dropdown/Dropdown";
import Paragraph from "../Paragraph";
import AboutDialog from "../AboutDialog/AboutDialog";
import Modal from "../Modal/Modal";
import SourcesDialog from "../SourcesDialog/SourcesDialog";
import PictureDialog from "../PictureDialog/PictureDialog";
import Image from "../Image/Image";

const Footer = ({ style, ...props }) => {
  const [small] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showSources, setShowSources] = useState(false);
  const [showPictures, setShowPictures] = useState(false);

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

  const togglePictures = () => {
    setShowPictures(!showPictures);
  };

  return (
    <div className={styles.footer} {...props}>
      <div className={styles.footerButton}>
        <Button onClick={() => scrollToTop("Top")} variant={"text"}>
          Til toppen
        </Button>

        <Button variant={"text"} onClick={toggleAbout}>
          Om oss
        </Button>

        <Button variant={"text"} onClick={togglePictures}>
          Bilder
        </Button>
        <AboutDialog open={showAbout} onClose={toggleAbout} />
        <SourcesDialog onClose={toggleSources} open={showSources} />
        <PictureDialog open={showPictures} onClose={togglePictures} />
        <Button variant={"text"} onClick={toggleSources}>
          Referanser
        </Button>
        <AboutDialog open={showAbout} onClose={toggleAbout} />
        <SourcesDialog onClose={toggleSources} open={showSources} />
      </div>
      <Image
        src="/images/ntnulogo1.png"
        alt="NTNU sin logo"
        style={{ maxWidth: "20rem", marginTop: "5rem" }}
      />
    </div>
  );
};

export default Footer;
