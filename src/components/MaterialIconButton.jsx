import React from 'react';
import '../App.css';

/**
 * MaterialIconButton Component
 * 
 * A React component wrapper for Material Web's icon buttons, offering an interface for various button types 
 * such as 'filled', 'filled-tonal', and 'outlined'. Default type is 'md-icon-button'. Optionally, pass an icon.
 * 
 * Props:
 * - type (String): Type of the button. Values: 'filled', 'filled-tonal', 'outlined'.
 * - icon (Object): Primary icon displayed in the button. Contains:
 *      - name (String): Icon name.
 *      - style (Object): Inline CSS styles for the icon.
 * - toggleIcon (Object) [optional]: An optional secondary icon for toggle functionality. It should be an object containing:
 *      - name (String): The icon name for the toggled state.
 *      - slot (String): The slot for the toggle icon, usually 'selected'.
 *      - style (Object): Inline styles for the toggle icon.
 * - buttonStyle (Object): Inline CSS styles for the button.
 * - ...props: Additional props passed to the button element.
 * 
 * Example Usage:
 * <MaterialButton 
 *   type="outlined" 
 *   icon={{ name: 'play_arrow', slot: 'icon' }}
 *   toggle={{ name: 'pause', slot: 'selected' }}
 *   buttonStyle={{ backgroundColor: 'lightblue' }}
 *   onClick={() => console.log('Button Clicked')}
 * />
 */

const MaterialIconButton = ({ type, icon, toggleIcon, toggle, buttonStyle, ...props }) => {

    let ButtonTag = 'md-icon-button';
    switch (type) {
        case 'filled':
            ButtonTag = 'md-filled-icon-button';
            break;
        case 'filled-tonal':
            ButtonTag = 'md-filled-tonal-icon-button';
            break;
        case 'outlined':
            ButtonTag = 'md-outlined-icon-button';
            break;
    }

    const customStyle = {
        ...buttonStyle
    };

    return (
        <ButtonTag style={customStyle} toggle={toggle ? 'toggle' : undefined} {...props}>
            <md-icon slot={icon.slot || ''} style={icon.style || {}}>{icon.name}</md-icon>
            {toggle && toggleIcon && <md-icon slot={toggleIcon.slot || 'selected'} style={toggleIcon.style || {}}>{toggleIcon.name}</md-icon>}
        </ButtonTag>
    );
};

export default MaterialIconButton;
