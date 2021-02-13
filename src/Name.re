[@react.component]
let make = (~name) => {
  <div>
    <h1> {React.string("Name: " ++ name)} </h1>
  </div>
};
