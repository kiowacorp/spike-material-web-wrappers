
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
import MaterialCard from './components/MaterialCard'
import CardContent from './components/CardContent';
import CardContent2 from './components/CardContent2';
import CardContent3 from './components/CardContent3';

MaterialIconButtonExamples
function App() {
  return (
    <div className="App">
      <h1>Material Web Components</h1>
      <MaterialButtonExamples />
      <MaterialIconButtonExamples />

      <div style={{
        marginTop: "40px",
        width: "100%",
        gap: "10%",
        display: "flex",
        justifyContent: "space-between"
      }} >
        <MaterialCard variant="elevation">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled" />
        </MaterialCard>
        <MaterialCard variant="filled">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled" />
        </MaterialCard>
        <MaterialCard variant="outlined">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled" />
        </MaterialCard>
      </div>
      <div style={{
        marginTop: "40px",
        width: "100%",
        gap: "10%",
        display: "flex",
        justifyContent: "space-between"
      }} >
        <MaterialCard variant="elevation">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="outlined" />
        </MaterialCard>
        <MaterialCard variant="filled">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="outlined" />
        </MaterialCard>
        <MaterialCard variant="outlined">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="outlined" />
        </MaterialCard>
      </div>
      <div style={{
        marginTop: "40px",
        width: "100%",
        gap: "10%",
        display: "flex",
        justifyContent: "space-between"
      }} >
        <MaterialCard variant="elevation">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled-tonal" />
        </MaterialCard>
        <MaterialCard variant="filled">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled-tonal" />
        </MaterialCard>
        <MaterialCard variant="outlined">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="filled-tonal" />
        </MaterialCard>
      </div>
      <div style={{
        marginTop: "40px",
        marginBottom: "80px",
        width: "100%",
        gap: "10%",
        display: "flex",
        justifyContent: "space-between"
      }} >
        <MaterialCard variant="elevation">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="default" />
        </MaterialCard>
        <MaterialCard variant="filled">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="default" />
        </MaterialCard>
        <MaterialCard variant="outlined">
          <CardContent title="Hello World" description1="this is our demo" description2="this is our demo 2" cardType="default" />
        </MaterialCard>
      </div>

    </div >
  );
}

export default App;


