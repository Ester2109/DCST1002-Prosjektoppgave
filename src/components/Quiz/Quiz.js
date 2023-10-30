import styles from "./Quiz.module.css";

const Quiz = ({ children, ...props }) => {
  return (
    <div className={styles.quiz} {...props}>
      <i className={styles.questionMark}>&#63;</i>
      <i className={styles.question}>{children}</i>
    </div>
  );
};

export default Quiz;
