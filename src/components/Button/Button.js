import styles from "./Button.module.css";

function Button({ children, buttonSize, variant, ...props }) {
  let fontSize = "20px";
  if (buttonSize === "large") fontSize = "100px";
  if (buttonSize === "medium") fontSize = "50px";

  return (
    <button
      className={styles.button}
      style={{
        fontSize: fontSize,
        background: variant === "outlined" ? "transparent" : "red",
        border: "3px solid red",
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
