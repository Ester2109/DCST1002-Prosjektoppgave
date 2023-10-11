import Button from "../Button/Button";
import styles from "./Header.module.css";

function Header() {
  const onclick = () => {
    alert("Hei på deg");
  };

  return (
    <div className={styles.header}>
      <Button variant={"outlined"} onClick={onclick}>
        Om oss
      </Button>
      <Button variant={"outlined"}>Oppgavebeskrivelse</Button>
      <Button variant={"outlined"}>Oooog en te</Button>
    </div>
  );
}

export default Header;
