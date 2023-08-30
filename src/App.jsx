import React from "react";
import Header from "./components/Header/Header";
import SecondSection from "./components/secondsection/SecondSection";
import ThirdSection from "./components/thirdsection/ThirdSection";
import Franchise from "./components/franchise/Franchise";
import Follow from "./components/follow/Follow";
import Footer from "./components/footer/Footer";
import SecondSection2 from "./components/secondsection2/SecondSection2";

const App = () => {
  return (
    <div>
      <Header />
      {/* <SecondSection /> */}
      <SecondSection2 />

      <ThirdSection />
      <Franchise />
      <Follow />
      <Footer />
    </div>
  );
};

export default App;
