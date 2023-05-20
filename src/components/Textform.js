import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    // console.log("lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = ()=>{
    // console.log("lowercase was clicked"+ text);
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'#212529',  color: props.mode==='dark'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary my-4 mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} minutes reading time</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Type something to preview it here"}</p>
    </div>
    </>
  )
}
