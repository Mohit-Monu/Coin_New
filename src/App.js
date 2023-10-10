import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
