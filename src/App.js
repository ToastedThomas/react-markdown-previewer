import './App.css';
import React, { useState, useEffect } from 'react';
import TextEditor from './components/TextEditor';
import Previewer from './components/Previewer';

function App() {
  //declaring state variables to managed component
  const [maximizedEditor, setMaximizedEditor] = useState(false);
  const [maximizedPreviewer, setMaximizedPreviewer] = useState(false);
  const [text, setText] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
\/\/ this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);


  //handlers
  const handleChange = (newText) => setText(newText);
  const maximizeEditor = () => setMaximizedEditor(!maximizedEditor);
  const maximizePreviewer = () => setMaximizedPreviewer(!maximizedPreviewer);

  return (
    <div className="App">
      {!maximizedPreviewer && (
        <TextEditor
          value={text}
          handleChange={handleChange}
          maximizeEditor={maximizeEditor}
          isMaxed={maximizedEditor} 
        />  
      )}
      {!maximizedEditor && (
        <Previewer 
        value={text}
        maximizePreviewer={maximizePreviewer}
        isMaxed={maximizedPreviewer}
      />
      )}
      
    </div>
  );
}

export default App;
