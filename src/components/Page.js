import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import Chapter2 from "./chapters/Chapter2/Chapter2";

function Page() {
  return (
    <>
      <Header
        style={{
          position: "fixed",
        }}
      />
      <Welcome />
      <Chapter2 />
    </>
  );
}

export default Page;
