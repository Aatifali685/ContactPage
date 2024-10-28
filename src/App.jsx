import React from "react";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Contactheader from "./components/ContactHeader/Contactheader";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <Contactheader />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
