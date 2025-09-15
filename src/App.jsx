import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./UI/intro/Intro";
import Enrich from "./UI/enrich/Enrich";
import Elements from "./UI/elements/Elements";
import Share from "./UI/share/Share";
import Trusted from "./UI/trusted/Trusted";
import Group from "./UI/group/Group";
import Teach from "./UI/teach/Teach";
import Featured from "./UI/featured/Featured";
import Lessons from "./UI/lessons/Lesson";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Lessons />
      <Enrich />
      <Elements />
      <Share />
      <Trusted />
      <Group />
      <Teach />
      <Featured />
      <Footer />
    </div>
  );
};

export default App;
