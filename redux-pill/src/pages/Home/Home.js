import React from "react";
import withLayout from "../../hoc/withLayout";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
export default withLayout(Home);
