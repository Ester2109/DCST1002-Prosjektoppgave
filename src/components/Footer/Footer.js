import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Footer.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Footer = ({ children, style, ...props }) => {

    const scrollToTop = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    }
    const [small] = useState(false);
    return (
       <div className={styles.footer}
       style={{
        height: small ? "3rem" : "30rem",
           ...style,
       }}
       {...props}>
    <div className={styles.footerButton}>
       <Button onClick={() => scrollToTop("Top")} variant={"text"}>Til toppen</Button> 
        
        <Button variant={"text"}>Om oss</Button>
        <Button variant={"text"}>Kilder</Button>
        <Button variant={"text"}>Bilder</Button>
        
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