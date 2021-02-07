'use strict';


var peach = "#FFE5B4";

var style = "\n  h1{\n    text-align: center;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n  }\n  button {\n    background-color: Salmon;\n    color: Black;\n    box-shadow: 0 0 0 1px IndianRed;\n    border: none;\n    padding: 8px;\n    font-size: 16px;\n    border-radius: 5px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n  button:active {\n    background-color: " + peach + ";\n    color: Chocolate;\n  }\n  .container {\n    border-radius: 12px;\n    font-family: sans-serif;\n    box-shadow: 0px 4px 16px rgb(20 0, 200, 200);\n    display: flex;\n    flex-direction: column;\n  }\n  canvas{\n    margin: 7px 7px 0px 7px;\n    vertical-align: middle;\n    border-radius: 12px;\n    width: 100px;\n    height: 100px;\n  }\n  hr{\n    color: black;\n    height: 3px;\n    width: 90%;\n  }\n  table{\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n";

var reasonReactBlue = "#48a9dc";

var indianRed = "CD5C5C";

exports.reasonReactBlue = reasonReactBlue;
exports.peach = peach;
exports.indianRed = indianRed;
exports.style = style;
/* No side effect */
