import React from 'react';
import MaterialButton from "./MaterialButton";

const CardContent = ({ title, description1, description2 }) => {
    const containerStyle = {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        padding: "0px 20px",

        minHeight: "200px",
        minWidth: "300px"

    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
    };
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const buttonStyle = {
        position: 'absolute',
        bottom: '16px',
        right: '16px'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <h3 style={{ marginTop: 15 }}>{title}</h3>
                <p style={{ marginTop: 0 }}>1. {description1}</p>
                <p style={{ marginTop: 0 }}>2. {description2}</p>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div style={buttonContainerStyle}>
                <MaterialButton type="outlined">
                    Click me
                </MaterialButton>
            </div>
        </div >
    );
};

export default CardContent;
