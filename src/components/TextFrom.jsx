import React, { useState } from "react";

export default function (props) {
    const [text,setText]=useState('Enter text to convert uppercase');

    function handleClick(){
        const newText=text.toUpperCase();
        setText(newText);
        // setText('you have clicked and changed the text',+text)
    }
    function handleChange(e){
      setText(e.target.value)//*for making it edidtable
    }

  return (

     <>
      <div class="my-3 container">
      <h2>{props.heading}</h2>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>

        <button className="btn btn-primary my-4 "  onClick={handleClick} >convert to uppercase</button>
        
      </div>

      <div>
        <h1>Summary</h1>

      </div>
     
     
     <div>
     <h1>Preview</h1>
     </div>
  
     </>
    
  );
}
