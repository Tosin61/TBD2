import React from 'react';
import character1 from './Images/TBD character.PNG';
//import character2 from './Images/TBD character.PNG';
//import character3 from './Images/TBD character.PNG';
//import character4 from './Images/TBD character.PNG';
import { useNavigate } from 'react-router-dom';



function CharacterPersonality({ characterName }) {

    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
    * depending on the character that was passed from CharacterSelection, 
    * we want to show a certain bio 
    */

    //const characterName = "";

    const Personality_imgstyle={
        width: "200px",
        height: "200px"
    }

    const Personality_p1style={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        padding: "20px",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"

    }

    const Personality_p2style={
        textAlign: "center",
        color: "black",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"

    }

    const Personality_buttonstyle={
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
            <img style={Personality_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p style={Personality_p1style}> Character Name: {characterName} </p>
            <p style={Personality_p2style}> Beginning: Blah </p>
            <p style={Personality_p2style}> Middle: TBD... </p>
            <p style={Personality_p2style}> Personality:<br/>
                -Blah<br/>
                -Blah<br/>
                -Blah<br/>
            </p>
            <p style={Personality_p2style}> Unique Ability: Blah </p>

            <button style={Personality_buttonstyle} type="button" onClick={() => navigate('/Scenarios')}>Start </button>
        </body>
    );

}

export default CharacterPersonality;