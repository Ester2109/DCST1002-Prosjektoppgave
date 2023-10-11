import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <div className={styles.header}>
      <Button variant={"outlined"}>Om oss</Button>
      <Button>Om oss</Button>
      <Button variant={"outlined"}>Om oss</Button>
      <Button variant={"outlined"}>Om oss</Button>
    </div>
  );
}

export default Header;
