'use strict';

var React = require("react");

function Name(Props) {
  var name = Props.name;
  return React.createElement("div", undefined, React.createElement("h1", undefined, "Name: " + name));
}

var make = Name;

exports.make = make;
/* react Not a pure module */
