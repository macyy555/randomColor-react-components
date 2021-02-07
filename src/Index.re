// Entry point

[@bs.val] external document: Js.t({..}) = "document";

// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.
let header = document##createElement("h1");
document##body##appendChild(header);
header##innerHTML #= "Name: Maythaporn";

let style = document##createElement("style");
document##head##appendChild(style);
style##innerHTML #= ExampleStyles.style;

let makeContainer = () => {
  let container = document##createElement("div");
  container##className #= "container";
  
  let () = document##body##appendChild(container);

  container;
};

ReactDOMRe.render(
  <RandomColorDocs />,
  makeContainer(),
);


