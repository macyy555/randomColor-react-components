'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Name$MyReactApp = require("./Name.bs.js");
var LineBreak$MyReactApp = require("./LineBreak.bs.js");
var ExampleStyles$MyReactApp = require("./ExampleStyles.bs.js");
var RandomColorDocs$MyReactApp = require("./RandomColorDocs.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$MyReactApp.style;

function makeContainer(format) {
  var container = document.createElement(format);
  container.className = "container";
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(Name$MyReactApp.make, {
          name: "Maythaporn"
        }), makeContainer("div"));

ReactDom.render(React.createElement(LineBreak$MyReactApp.make, {}), makeContainer("div"));

ReactDom.render(React.createElement(RandomColorDocs$MyReactApp.make, {}), makeContainer("div"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
