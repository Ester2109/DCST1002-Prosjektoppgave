import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Chapter2 from "./chapters/Chapter2/Chapter2";
import Chapter3 from "./chapters/Chapter3/Chapter3";
import Sidestrip from "./Sidestrip/Sidestrip";
import Quiz from "./Quiz/Quiz";
import ChapterWrapper from "./ChapterWrapper/ChapterWrapper";

function Page() {
  return (
    <>
      <Header
        style={{
          position: "fixed",
        }}
      />
      <Welcome />
      <ChapterWrapper />
    </>
  );
}

export default Page;
