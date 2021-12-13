import React from 'react';
import logo from './Images/TBD Logo.PNG';
import { useNavigate } from 'react-router-dom';



function HowToPlay() {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route);
    }

        //css styles
        const HowTo_imgstyle ={
            marginTop: "120px"
        }

        const HowTo_p1style={
            textAlign: "center",
            color: "black",
            backgroundColor: "white",

    
            fontFamily: "Copperplate",
            fontSize: "25px",
            textDecoration: "none",
            textTransform: "none",
            whiteSpace: "nowrap"
        }
    
        const HowTo_p2style ={
            textAlign: "center",
            color: "black",
            backgroundColor: "white",
    
            fontFamily: "Copperplate",
            fontSize: "25px",
            textDecoration: "none",
            textTransform: "none",
            whiteSpace: "nowrap"
        }
    
        const HowTo_buttonstyle={
            position: "relative",

    
    
            fontFamily: "Copperplate",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
            textAlign: "center",
            textTransform: "uppercase",
    
            color: "black",
            backgroundColor: "grey"
    
        }

    return (
        <body>
            <img style={HowTo_imgstyle} src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p style={HowTo_p1style}> How To Play...</p>

            <p style={HowTo_p2style}>
            You must correctly make decisions on what the<br/>
            middle of the story looks like based off your<br/>
            character's personality. Correctly determine what<br/>
            your character would do in the given scenarios to<br/>
            get from the beginning to the end.
            </p >

            <button style={HowTo_buttonstyle} type="button" onClick={() => navigate('/CharacterSelection')}>Next</button>
        </body>
    );

}

export default HowToPlay;