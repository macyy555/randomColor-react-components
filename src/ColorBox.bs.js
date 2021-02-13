'use strict';

var React = require("react");

function ColorBox(Props) {
  var color = Props.color;
  var canvasStyle = {
    backgroundColor: color
  };
  return React.createElement("canvas", {
              style: canvasStyle
            });
}

var make = ColorBox;

exports.make = make;
/* react Not a pure module */
