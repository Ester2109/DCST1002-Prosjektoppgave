import Sidestrip from "../Sidestrip/Sidestrip";
import Chapter2 from "../chapters/Chapter2/Chapter2";
import Chapter3 from "../chapters/Chapter3/Chapter3";
import Chapter4 from "../chapters/Chapter4/Chapter4";
import styles from "./ChapterWrapper.module.css";

const ChapterWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Sidestrip className={styles.sidestrip} />
      <div>
        <Chapter2
          style={{
            marginTop: "-3rem",
          }}
        />
        <Chapter3 />
        <Chapter4 />
      </div>
    </div>
  );
};

export default ChapterWrapper;
