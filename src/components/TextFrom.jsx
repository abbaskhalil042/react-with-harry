import React, { useState } from "react";

export default function (props) {
  const [text, setText] = useState(" ");

  const [countLetter, setCountLetter] = useState();

  function handleUpperClick() {
    let newText = text.toUpperCase();
    setText(newText); //!text has converted into uppercase
    // setText('you have clicked and changed the text',+text)
  }


  function handleLowerClick() {
    let newText = text.toLowerCase();
    setText(newText); //!text has converted into uppercase
    // setText('you have clicked and changed the text',+text)
  }
  function handleChange(e) {
    setText(e.target.value); //*for making it edidtable
  }


  function handleClear(){
    setText(" ")
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

        <button className="btn btn-primary my-4 " onClick={handleUpperClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary my-4 m-4" onClick={handleLowerClick}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary my-4" onClick={handleClear}>
          clear Text
        </button>
      </div>

     <div className="container">
     <div className="">
        <h2 className="my-2">Your text summary</h2>
      <b className="text-success">{ text.trim() === "" ? 0 : text.split(" ").length} words and {text.length} characters</b>
      <br />
      <b className="text-success">{ text.trim()==="" ?(text.split(" ").length)*0:(text.split(" ").length)*0.008} minutes to read</b>
      </div>

      <div>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
     </div>
    </>
  );
}
