import Sidestrip from "../Sidestrip/Sidestrip";
import Chapter2 from "../chapters/Chapter2/Chapter2";
import Chapter3 from "../chapters/Chapter3/Chapter3";
/* import Chapter4 from "../chapters/Chapter4/Chapter4"; */
import Chapter5 from "../chapters/Chapter5/Chapter5";
import Chapter6 from "../chapters/Chapter6/Chapter6";
import Chapter7 from "../chapters/Chapter7/Chapter7";
import styles from "./ChapterWrapper.module.css";

const ChapterWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Sidestrip className={styles.sidestrip} />
      <div>
        <Chapter2
          style={{
            marginTop: "2rem",
          }}
        />
        <Chapter3 />
        {/* <Chapter4 /> */}
        <Chapter5 />
        <Chapter6 />
        <Chapter7
          style={{
            minHeight: "fit-content",
            padding: "5rem auto",
          }}
        />
      </div>
    </div>
  );
};

export default ChapterWrapper;
