import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";

function Page() {
  return (
    <>
      <Header
        style={{
          position: "fixed",
        }}
      />
      <Welcome />

      <h1>Hei på deg</h1>
    </>
  );
}

export default Page;
