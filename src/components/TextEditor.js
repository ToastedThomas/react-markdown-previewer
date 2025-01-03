import React from "react";

const TextEditor = ({ value, handleChange, maximizeEditor, isMaxed }) => {
  return (
    <div className="textEditor">
      <h3>Text Editor</h3>
      <i 
        className={isMaxed ? "fa-solid fa-down-left-and-up-right-to-center" : "fa-solid fa-maximize"} 
        onClick={maximizeEditor}
      />
      <textarea
        rows="13"
        value={value}
        onChange={event => {
          handleChange(event.target.value);
        }}
        style={{height: isMaxed ? "85vh" : "35%", width: "100%"}}
        ></textarea>
    </div>
  )
}

export default TextEditor;