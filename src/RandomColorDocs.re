let num_color = 9;
let tableStyle = ReactDOMRe.Style.make(~marginLeft="auto",  ~marginRight="auto", (),);

open RandomColorRe;

[@bs.val] external document: Js.t({..}) = "document";

[@react.component]

let make = () => {

  let rec randomPaint = (rancl, iter) => {
    switch(iter){
      | 0 => ();
      | _ => {  

                ReactDOMRe.render(<ColorBox color=rancl[iter-1]/>, document##getElementById("colorCanvas" ++ string_of_int(iter)));
                randomPaint(rancl, iter -1);
             };
    };
  };

  let pickColor = () => {
    let ranc = randomColorMultiple(~seed="test123", ~count=9, ());
    randomPaint(ranc, num_color);
  };

  // We can use a fragment here, but we don't, because we want to style the counter
  <div>
    <button onClick={_event => pickColor()}>
      {React.string("Click!")}
    </button>
    <table style=tableStyle>
      <tr>
        <td id="colorCanvas1"/>
        <td id="colorCanvas2"/>
        <td id="colorCanvas3"/>
      </tr>
      <tr>
        <td id="colorCanvas4"/>
        <td id="colorCanvas5"/>
        <td id="colorCanvas6"/>
      </tr>
      <tr>
        <td id="colorCanvas7"/>
        <td id="colorCanvas8"/>
        <td id="colorCanvas9"/>
      </tr>
    </table>
  </div>;

};

