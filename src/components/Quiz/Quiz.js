import styles from "./Quiz.module.css";

const Quiz = ({ children, ...props }) => {
  return (
    <div className={styles.quiz} {...props}>
      <i className={styles.text}>{children}</i>
    </div>
  );
};

export default Quiz;
