import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="parent">
    <div id="child">
        <h1>I'am h1 tag</h1>
        // If we want to pass sibling
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'am h1 tag</h1>
        // If we want to pass sibling
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/

/*const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I'am h1 tag"),
    React.createElement("h2", { id: "heading1" }, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2"}, [
    React.createElement("h1", { id: "heading1" }, "I'am h1 tag"),
    React.createElement("h2", { id: "heading1" }, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  {},
  "Hello World Using React Stratch"
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namastey React");

// jsx heading
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namastey React Using JSX
  </h1>
);

// React Functional Component & Component Composition
const HeadingComponent = () => {
  return (
    <div className="container">
      {Title()}
      <Title />
      <h1 className="heading">Namastey React Functional Components</h1>;
    </div>
  );
};

// Convert to html element
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Rendering a component
root.render(<HeadingComponent />);
