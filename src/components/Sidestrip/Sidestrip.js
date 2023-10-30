import styles from "./Sidestrip.module.css";

const Sidestrip = ({ children, className, ...props }) => {
  return (
    <div className={`${className} ${styles.wrapper}`} {...props}>
      <SidebarButton>Bakgrunn for oppgaven</SidebarButton>
      <SidebarButton>Hva er posisjonsdeling?</SidebarButton>
      <SidebarButton>Hva tenker dere om dette?</SidebarButton>
      <SidebarButton>Konsekvender</SidebarButton>
      <SidebarButton>Oppsummering</SidebarButton>
    </div>
  );
};

const SidebarButton = ({ children }) => {
  return <button className={styles.SidebarButton}>{children}</button>;
};

export default Sidestrip;
