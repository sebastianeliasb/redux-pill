import React, { useEffect } from "react";
import withLayout from "../../hoc/withLayout";
import Hero from "../../Components/Hero";
import { useSelector, useDispatch } from "react-redux";
import { getAllProperties } from "../../redux/search/action";

function Home() {
  const search = useSelector((state) => state.search.properties.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);
  console.log(search);
  return (
    <>
      <Hero />
    </>
  );
}
export default withLayout(Home);
