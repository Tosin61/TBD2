import React from 'react';
import character1 from './Images/TBD character.PNG';
import character2 from './Images/TBD character.PNG';
import character3 from './Images/TBD character.PNG';
import character4 from './Images/TBD character.PNG';
import { useNavigate } from 'react-router-dom';

function CharacterSelection() {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
    * depending on the character that is selected, 
    * we want to return which character they select 
    * and pass that value to CharacterPersonality
    */
    //characterName = { character1,name};
    var characterName = "test";//test characterName

    return (
        <body>
            <p> Select Your Character </p>
            
            <input type="image" src={character1} /> <p> Character 1 </p>
            <input type="image" src={character2} /> <p> Character 2 </p>
            <input type="image" src={character3} /> <p> Character 3 </p>
            <input type="image" src={character4} /> <p> Character 4 </p>

            <button type="button" onClick={() => navigate('/CharacterPersonality')}> Select </button>
        </body>
    );
}

export default CharacterSelection;