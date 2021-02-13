'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var RandomColorRe = require("bs-randomcolor/src/RandomColorRe.bs.js");
var ColorBox$MyReactApp = require("./ColorBox.bs.js");

var tableStyle = {
  marginRight: "auto",
  marginLeft: "auto"
};

function RandomColorDocs(Props) {
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (_event) {
                      var ranc = RandomColorRe.randomColorMultiple(undefined, undefined, undefined, undefined, "test123", 9, undefined, undefined);
                      var _iter = 9;
                      while(true) {
                        var iter = _iter;
                        if (iter === 0) {
                          return ;
                        }
                        ReactDom.render(React.createElement(ColorBox$MyReactApp.make, {
                                  color: Caml_array.get(ranc, iter - 1 | 0)
                                }), document.getElementById("colorCanvas" + String(iter)));
                        _iter = iter - 1 | 0;
                        continue ;
                      };
                    })
                }, "Click!"), React.createElement("table", {
                  style: tableStyle
                }, React.createElement("tr", undefined, React.createElement("td", {
                          id: "colorCanvas1"
                        }), React.createElement("td", {
                          id: "colorCanvas2"
                        }), React.createElement("td", {
                          id: "colorCanvas3"
                        })), React.createElement("tr", undefined, React.createElement("td", {
                          id: "colorCanvas4"
                        }), React.createElement("td", {
                          id: "colorCanvas5"
                        }), React.createElement("td", {
                          id: "colorCanvas6"
                        })), React.createElement("tr", undefined, React.createElement("td", {
                          id: "colorCanvas7"
                        }), React.createElement("td", {
                          id: "colorCanvas8"
                        }), React.createElement("td", {
                          id: "colorCanvas9"
                        }))));
}

var num_color = 9;

var make = RandomColorDocs;

exports.num_color = num_color;
exports.tableStyle = tableStyle;
exports.make = make;
/* react Not a pure module */
