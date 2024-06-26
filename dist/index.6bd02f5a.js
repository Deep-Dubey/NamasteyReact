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

*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "I'am h1 tag"),
        React.createElement("h2", {
            id: "heading1"
        }, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading1"
        }, "I'am h1 tag"),
        React.createElement("h2", {
            id: "heading1"
        }, "I'm h2 tag")
    ])
]);
const heading = React.createElement("h1", {}, "Hello World Using React Stratch");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
