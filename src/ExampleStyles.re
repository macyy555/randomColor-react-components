let reasonReactBlue = "#48a9dc";
let peach = "#FFE5B4";
let indianRed = "#CD5C5C";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  h1{
    text-align: center;
  }
  body {
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  button {
    background-color: Salmon;
    color: Black;
    box-shadow: 0 0 0 1px IndianRed;
    border: none;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  button:active {
    background-color: $peach;
    color: Chocolate;
  }
  .container {
    border-radius: 12px;
    font-family: sans-serif;
    box-shadow: 0px 4px 16px rgb(20 0, 200, 200);
    display: flex;
    flex-direction: column;
  }
  canvas{
    margin: 7px 7px 0px 7px;
    vertical-align: middle;
    border-radius: 12px;
    width: 100px;
    height: 100px;
    background-color: $peach;
  }
  hr{
    color: black;
    height: 3px;
    width: 90%;
  }
  table{
    margin-left: auto;
    margin-right: auto;
  }
  
|j};
