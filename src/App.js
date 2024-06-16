import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { resList } from "./utility/resList";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


// Convert to html element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a component
root.render(<AppLayout />);
