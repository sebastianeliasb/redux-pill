import React from "react";
import withLayout from "../../hoc/withLayout";
import Hero from "../../Components/Hero";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
export default withLayout(Home);
