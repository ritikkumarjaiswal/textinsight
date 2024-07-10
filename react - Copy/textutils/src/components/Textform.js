import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    
    const handleCaClick = () => {
        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        let newText = words.join(" ");
        setText(newText);
    };
    
    const handleClearClick = () => {
        setText("");
    };
    
    const handleSpaceClick = () => {
        let newText = text.trim();
        newText = newText.replace(/\s+/g, ' ');
        setText(newText);
    };
    
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    };
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    
    const [text, setText] = useState("enter text here");
    
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-md-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-md-2 my-2" onClick={handleCaClick}>Capitalized Case</button>
                    <button className="btn btn-primary mx-md-2 my-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-md-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
                    <button className="btn btn-primary mx-md-2 my-2" onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
