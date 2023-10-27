import styles from "./Sidestrip.module.css";

const Sidestrip = ({ children, style, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <SidebarButton>Bakgrunn for oppgaven</SidebarButton>
      <SidebarButton>Kapittel 2</SidebarButton>
      <SidebarButton>Kapittel 3</SidebarButton>
      <SidebarButton>Kapittel 4</SidebarButton>
      <SidebarButton>Kapittel 5</SidebarButton>
    </div>
  );
};

const SidebarButton = ({ children }) => {
  return <button className={styles.SidebarButton}>{children}</button>;
};

export default Sidestrip;
