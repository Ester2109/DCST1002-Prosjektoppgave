import styles from "./Screen.module.css";

const Screen = ({ children, style, ...props }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Screen;
