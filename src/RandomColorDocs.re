let num_color = 9;
let lineStyle = ReactDOMRe.Style.make(~backgroundColor="#000000", ~height="3px", ~width="90%", (), );
let tableStyle = ReactDOMRe.Style.make(~marginLeft="auto",  ~marginRight="auto", (),);

open RandomColorRe;

[@bs.val] external document: Js.t({..}) = "document";
[@react.component]

let make = () => {

  let rec randomPaint = (rancl, iter) => {
    switch(iter){
      | 0 => ();
      | _ => {  

                let canvasStyle = ReactDOMRe.Style.make(
                  ~backgroundColor=rancl[iter-1], 
                  (),
                  );

                ReactDOMRe.render(<canvas style=canvasStyle/>, document##getElementById("colorCanvas" ++ string_of_int(iter)));
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
      <hr style=lineStyle/>
      <button onClick={_event => pickColor()}>
        {React.string("Click!")}
      </button>
      <table style=tableStyle>
        <tr >
          <td>
            <div id="colorCanvas1"/>
          </td>
          <td>
            <div id="colorCanvas2"/>
          </td>
          <td>
            <div id="colorCanvas3"/>
          </td>
        </tr>
        <tr>
          <td>
            <div id="colorCanvas4"/>
          </td>
          <td>
            <div id="colorCanvas5"/>
          </td>
          <td>
            <div id="colorCanvas6"/>
          </td>
        </tr>
        <tr>
          <td>
            <div id="colorCanvas7"/>
          </td>
          <td>
            <div id="colorCanvas8"/>
          </td>
          <td>
            <div id="colorCanvas9"/>
          </td>
        </tr>
      </table>
  </div>;
  
};

