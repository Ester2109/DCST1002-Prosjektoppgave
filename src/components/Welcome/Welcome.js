import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.vignette} />
      <div className={styles.content}>
        <h1 className={styles.overskrift}>
          Konsekvensene av <br /> posisjonsdeling i tjeneste
        </h1>
        <h2 className={styles.subText}>
          En prosjektoppgave av studenter ved NTNU
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
