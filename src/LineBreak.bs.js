'use strict';

var React = require("react");

var lineStyle = {
  backgroundColor: "#000000",
  height: "3px",
  width: "90%"
};

function LineBreak(Props) {
  return React.createElement("div", undefined, React.createElement("hr", {
                  style: lineStyle
                }));
}

var make = LineBreak;

exports.lineStyle = lineStyle;
exports.make = make;
/* react Not a pure module */
