import React from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const App: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      { children }
      <Footer />
    </Container>
  );
}

export default App;
