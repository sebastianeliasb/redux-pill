import React from "react";
import withLayout from "../../hoc/withLayout";
import Hero from "../../Components/Hero";
import { useSelector, useDispatch } from "react-redux";
import { getAllProperties } from "../../redux/search/action";
import { data } from "../../db/database";

function Home() {
  const search = useSelector((state) => state.search);

  console.log(data.properties);
  return (
    <>
      <Hero />
    </>
  );
}
export default withLayout(Home);
