import React, { useEffect } from "react";
import withLayout from "../../hoc/withLayout";
import Hero from "../../Components/Hero";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProperties,
  getAllSearchedProperties,
} from "../../redux/search/action";

function Home() {
  // const search = useSelector((state) => state.search);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProperties());
  // }, []);
  return (
    <>
      <Hero />
    </>
  );
}
export default withLayout(Home);
