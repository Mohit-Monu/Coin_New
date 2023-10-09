import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
