import styles from "./Quote.module.css";

const Quote = ({ children, source, ...props }) => {
  return (
    <div className={styles.quote} {...props}>
      <i className={styles.quotationMark}>&#10078;</i>
      <i className={styles.quotation}>{children}</i>
    </div>
  );
};

export default Quote;
