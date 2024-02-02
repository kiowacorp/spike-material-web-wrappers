
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

import '../MaterialDesign.css';
import MaterialButton from '../components/MaterialButton';
import MaterialIconButton from '../components/MaterialIconButton';

const MaterialButtonExamples = () => {
    return (
        <div>
            <h3>Material Button</h3>
            <MaterialButton
                type="filled-tonal"
                icon={{ svg: <SendIcon /> }}
                trailingIcon
                aria-label="Send"
            >
                Send
            </MaterialButton>
            <MaterialButton
                type="filled"
                icon={{ svg: <OpenIcon /> }}
                aria-label="Open"
            >
                Open
            </MaterialButton>

        </div>
    )
}


const SendIcon = () => (
    <svg slot="icon" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" /></svg>
);

const OpenIcon = () => (
    <svg slot="icon" viewBox="0 0 48 48">
        <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
    </svg>
);

export default MaterialButtonExamples