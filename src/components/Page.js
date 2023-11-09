import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Sidestrip from "./Sidestrip/Sidestrip";
import Quiz from "./Quiz/Quiz";
import ChapterWrapper from "./ChapterWrapper/ChapterWrapper";
import Footer from "./Footer/Footer";

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
      <Footer />
    </>
  );
}

export default Page;
