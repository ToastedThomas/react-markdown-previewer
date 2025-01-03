import React from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
  gfm: true,
});

const Previewer = ({ value, maximizePreviewer, isMaxed }) => {
  //converting text to true markdown using marked
  const markdown = marked(value);

  return (
    <div className="previewerDiv">
      <h3>Markdown Preview</h3>
      <i
        className={isMaxed ? "fa-solid fa-down-left-and-up-right-to-center" : "fa-solid fa-maximize"}
        onClick={maximizePreviewer}
      />
      <div className="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  )
}

export default Previewer;