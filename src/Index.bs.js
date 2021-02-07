'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$MyReactApp = require("./ExampleStyles.bs.js");
var RandomColorDocs$MyReactApp = require("./RandomColorDocs.bs.js");

var header = document.createElement("h1");

document.body.appendChild(header);

header.innerHTML = "Name: Maythaporn";

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$MyReactApp.style;

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  return container;
}

ReactDom.render(React.createElement(RandomColorDocs$MyReactApp.make, {}), makeContainer(undefined));

exports.header = header;
exports.style = style;
exports.makeContainer = makeContainer;
/* header Not a pure module */
