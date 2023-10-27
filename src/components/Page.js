import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Chapter2 from "./chapters/Chapter2/Chapter2";
import Sidestrip from "./Sidestrip/Sidestrip";
import Screen from "./Screen/Screen";

function Page() {
  return (
    <>
      <Header
        style={{
          position: "fixed",
        }}
      />
      <Welcome />
      <div
        style={{
          width: "80%",
          display: "grid",
          margin: "auto",
          gridTemplateColumns: "min-content auto",
          columnGap: "10%",
        }}
      >
        <Sidestrip />
        <Chapter2 />
      </div>
    </>
  );
}

export default Page;
