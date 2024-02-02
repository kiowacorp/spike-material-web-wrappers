
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
import MdFilledTextField from './components/MdFilledTextField';
import MdOutlinedTextField from './components/MdOutlinedTextField';
import MaterialSymbol from './components/MaterialSymbol';
import MaterialIconButton from '../components/MaterialIconButton';
import MaterialButton from '../components/MaterialButton';



const MaterialIconButtonExamples = () => {
    return (
        <>
            <div>
                <h3>Material Web Icon Button</h3>

                {/* Icon Button that toggles Play and Pause Icons */}
                <MaterialIconButton
                    type="filled"
                    icon={{ name: 'play_arrow' }}
                    toggleIcon={{ name: 'pause', slot: 'selected' }}
                    toggle
                    onClick={() => console.log('Button Clicked')}
                />

                {/* 4 Default Icon Button Styles */}
                <MaterialIconButton
                    type="filled"
                    icon={
                        {
                            name: 'microwave_gen',
                            style: { size: '24px' }
                        }
                    }
                />
                <MaterialIconButton
                    type="outlined"
                    icon={
                        {
                            name: 'microwave_gen',
                            style: { size: '24px' }
                        }
                    }
                />
                <MaterialIconButton
                    type="filled-tonal"
                    icon={
                        {
                            name: 'microwave_gen',
                            style: { size: '24px' }
                        }
                    }
                />
                <MaterialIconButton
                    icon={
                        {
                            name: 'microwave_gen',
                            style: { size: '24px' }
                        }
                    }
                />

            </div>
            <div style={{ marginTop: "5px" }}>
                <h3>Material Web Icon Button Styled</h3>
                {/* 4 Default Icon Buttons with Custom Styles */}
                <MaterialIconButton
                    type="filled"
                    icon={{ name: 'mic', style: { color: 'red' } }}
                    onClick={() => console.log('Filled Button Clicked')}
                />
                <MaterialIconButton
                    type="filled"
                    icon={{ name: 'mic', style: { color: 'red' } }}
                    buttonStyle={{ backgroundColor: 'yellow', padding: '5px' }}
                    onClick={() => console.log('Filled Button Clicked')}
                />
                <MaterialIconButton
                    type="outlined"
                    icon={{ name: 'mic' }}
                    onClick={() => console.log('Outlined Button Clicked')}
                />
                <MaterialIconButton
                    type="outlined"
                    icon={{ name: 'mic' }}
                    buttonStyle={{ backgroundColor: 'yellow' }}
                    onClick={() => console.log('Outlined Button Clicked')}
                />
                <MaterialIconButton
                    type="filled-tonal"
                    icon={{ name: 'mic', style: { color: 'green' } }}
                    buttonStyle={{ backgroundColor: 'yellow' }}
                    onClick={() => console.log('Filled Tonal Button Clicked')}
                />
            </div>
        </>
    )
}



export default MaterialIconButtonExamples