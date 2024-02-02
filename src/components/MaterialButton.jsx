import React from 'react';
import '../App.css';

/**
 * MaterialButton Component
 *
 * A React component for Material Web's buttons with various types and optional icon support.
 *
 * Props:
 * - type (String): Type of the button. Values: 'outlined', 'filled', 'filled-tonal', 'text', 'elevated'.
 * - children (Node): The content of the button (text or other elements).
 * - icon (Object) [optional]: An icon to be displayed alongside the button text. Contains:
 *      - svg (Node): The SVG node for the icon.
 * - trailingIcon (Boolean): If true, the icon will be displayed after the text (trailing). Default is false (leading).
 * - buttonStyle (Object) [optional]: Inline CSS styles for the button.
 * - ...props: Additional props passed to the button element.
 *
 * Note: Link buttons cannot have trailing icons.
 * 
 * Example Usage:
 * <MaterialButton 
 *   type="filled-tonal" 
 *   icon={{ svg: <YourSvgIcon /> }}
 *   trailingIcon
 *   buttonStyle={{ backgroundColor: 'lightblue' }}
 * >
 *   Send
 * </MaterialButton>
 */
const MaterialButton = ({ type, children, icon, trailingIcon, buttonStyle, ...props }) => {
    let ButtonTag = 'md-text-button';

    switch (type) {
        case 'filled':
            ButtonTag = 'md-filled-button';
            break;
        case 'filled-tonal':
            ButtonTag = 'md-filled-tonal-button';
            break;
        case 'outlined':
            ButtonTag = 'md-outlined-button';
            break;
        case 'elevated':
            ButtonTag = 'md-elevated-button';
            break;
        default:
            break;
    }

    const customStyle = { ...buttonStyle };
    const additionalProps = trailingIcon ? { 'trailing-icon': '' } : {};


    return (
        <ButtonTag style={customStyle} {...additionalProps} {...props}>
            {!trailingIcon && icon && icon.svg}
            {children}
            {trailingIcon && icon && icon.svg}
        </ButtonTag>
    );
};

export default MaterialButton;
