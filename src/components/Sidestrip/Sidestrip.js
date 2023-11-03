import styles from "./Sidestrip.module.css";
import React from "react";

const Sidestrip = ({ children, className, ...props }) => {
  const scrollToChapter = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${className} ${styles.wrapper}`} {...props}>
      <SidebarButton onClick={() => scrollToChapter("Chapter2")}>
        Bakgrunn for oppgaven
      </SidebarButton>
      <SidebarButton onClick={() => scrollToChapter("Chapter3")}>
        Hva er posisjonsdeling?
      </SidebarButton>
      <SidebarButton onClick={() => scrollToChapter("Chapter4")}>
        Hva tenker dere om dette?
      </SidebarButton>
      <SidebarButton onClick={() => scrollToChapter("Chapter5")}>
        Konsekvenser
      </SidebarButton>
      <SidebarButton onClick={() => scrollToChapter("Chapter6")}>
        Oppsummering
      </SidebarButton>
    </div>
  );
};

const SidebarButton = ({ children, ...props }) => {
  return (
    <button className={styles.SidebarButton} {...props}>
      {children}
      <label className={styles.arrow}>⇢</label>
    </button>
  );
};

export default Sidestrip;
