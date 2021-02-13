[@react.component]
let make = (~color) => {
    let canvasStyle = ReactDOMRe.Style.make(
        ~backgroundColor=color, 
        (),
        );
    <canvas style=canvasStyle/>;
}