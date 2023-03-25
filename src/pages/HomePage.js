import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuizHome from "../components/QuizHome";

function HomePage() {
  const [showBottomBar, setShowBottomBar] = useState(false);
  function handleBottomBarVisibility() {
    setShowBottomBar((prev) => !prev);
  }
  return (
    <>
      <Header />
      <QuizHome
        showBottomBar={showBottomBar}
        setShowBottomBar={setShowBottomBar}
      />
      <Footer onClick={handleBottomBarVisibility} btnText = 'Take Quiz' />
    </>
  );
}

export default HomePage;
