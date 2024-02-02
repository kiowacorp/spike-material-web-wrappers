
import React from 'react';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/iconbutton/filled-tonal-icon-button.js';
import '@material/web/iconbutton/outlined-icon-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/iconbutton/filled-icon-button.js';
import '@material/web/button/filled-tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/elevated-button.js';
import '@material/web/icon/icon.js';
// import '@material/web/icon/filled-icon-button.js';
import '@material/web/checkbox/checkbox.js';
import './App.css';
import './MaterialDesign.css';
import MdFilledTextField from './components/MdFilledTextField';
import MdOutlinedTextField from './components/MdOutlinedTextField';
import MaterialSymbol from './components/MaterialSymbol';
import MaterialButtonExamples from './examples/MaterialButtonExamples';
import MaterialIconButtonExamples from './examples/MaterialIconButtonExamples';


MaterialIconButtonExamples
function App() {
  return (
    <div className="App">
      <h1>Material Web Components</h1>
      <MaterialButtonExamples />
      <MaterialIconButtonExamples />
    </div >
  );
}

export default App;


