// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
// JSX is a preprocessor step that adds XML syntax to JavaScript
// {{}} is a javascript object in JSX
// {} is a javascript variable in JSX
// "" for string JSX property
// '' for non JSX property

function getButtonText() {
  return 'Click on me!!!';
}

const App = () => {
  const buttonText = "Click Me!!!";
  const style = { backgroundColor: 'red', color: 'white' };

  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" tyep="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
      <button style={style}>
        {getButtonText()}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
