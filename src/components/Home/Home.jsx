import React from "react";
import Banner from "../../pages/Banner";
import ChooseUs from "../ChooseUs";
import Instructors from "../Instructors";
import PopularCourses from "./PopularCourses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <ChooseUs></ChooseUs>
      <Instructors></Instructors>
    </div>
  );
};

export default Home;
