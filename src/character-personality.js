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

    return (
        <body>
            <img src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
            <p> characterName={characterName} </p>
            <p> Beginning: Blah </p>
            <p> Middle: TBD... </p>
            <p> Personality:<br/>
                -Blah<br/>
                -Blah<br/>
                -Blah<br/>
            </p>
            <p> Unique Ability: Blah </p>

            <button type="button" onClick={() => navigate('/Scenarios')}>Start </button>
        </body>
    );

}

export default CharacterPersonality;