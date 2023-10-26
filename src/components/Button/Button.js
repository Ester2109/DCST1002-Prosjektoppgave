import styles from "./Button.module.css";

function Button({ children, buttonSize, variant, ...props }) {
  let fontSize = "1em";
  if (buttonSize === "large") fontSize = "100px";
  if (buttonSize === "medium") fontSize = "50px";

  let background;
  if (variant === "text" || variant === "outlined") background = "transparent";
  if (variant === "filled") background = "white";

  let color;
  if (variant === "text") color = "white";
  if (variant === "filled") color = "black";

  return (
    <button
      className={`${styles.button} ${styles.hover}`}
      style={{
        fontSize: fontSize,
        background: background,
        color: color,
        fontWeight: "semibold",
        border: variant === "text" ? "none" : "solid 2px white",
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
