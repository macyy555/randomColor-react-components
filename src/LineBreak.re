let lineStyle = ReactDOMRe.Style.make(~backgroundColor="#000000", ~height="3px", ~width="90%", (), );

[@react.component]
let make = () => {
  <div>
    <hr style=lineStyle/>
  </div>
};
