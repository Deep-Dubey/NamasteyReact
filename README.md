# React Course
# Vite is a bundler which bundled our code ready for production
# We will use Percel Bundler
# 2 type of dependency
#   1. Dev Dependency (only for development) -D
#   2. Dependency (for production)
# (^)carret:- minor update.
# (~)tilde:- patch update.
# Create git ignore file and put node modules because we don't need node_modules in out production
# To run parcel we will do (npx parcelindex.html)
# HMR - Hot Module Replacement in Parcel to auto refresh
# BrowserList support to browser for there old version
# Eg:- 
# "browserslist": [
    #   "last 2 Chrome versions",
    #   "last 2 Firefox versions",
    #   "last 2 Safari versions",
    #   "last 2 Edge versions",
]
# We can give any version number
# JSX is behind the sean converted to react element
# React.createElement is used to create react element
# React.createElement => ReactElement(JS Object) => HTMLElement(render)
# JSX = > React.createElement => ReactElement(JS Object) => HTMLElement(render)
# Component Composition putting one component into another component
# We can call a component inside a curly braces like
    # {Title()}
# File from App.js
    # /*
    # <div id="parent">
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
    #</div>
    #*/

    #/*const parent = React.createElement("div", { id: "parent" }, [
    #React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I'am h1 tag"),
    React.createElement("h2", { id: "heading1" }, "I'm h2 tag"),
    #]),
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
    // const Title = () => (
    //   <h1 className="heading" tabIndex="5">
    //     Namastey React Using JSX
    //   </h1>
    // );

    // React Functional Component & Component Composition
    // const HeadingComponent = () => {
    //   return (
    //     <div className="container">
    //       {/* {Title()} */}
    //       <Title />
    //       <h1 className="heading">Namastey React Functional Components</h1>;
    //     </div>
    //   );
    // };
    // root.render(heading);
# in useState we can pass array list from anothe location
    # import {resList} from "./utils/resList";
    # const [items,setItems] = useState(resList);
    #Like this we can pass arrays inside useState