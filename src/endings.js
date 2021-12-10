import React from 'react';
import character1 from './Images/TBD character.PNG';
//import character2 from './Images/TBD character.PNG';
//import character3 from './Images/TBD character.PNG';
//import character4 from './Images/TBD character.PNG';
import { useNavigate } from 'react-router-dom';

function Endings({ characterName }) {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
     * we need a data type to handle the character's information to pass:
     * based on the hearts they have, a certain ending would show
     */

    return (
        <body>
            <header>
                <img src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p> characterName={characterName} </p>
                lives
            </header>

            <div>
                <p> You made it to your goal unscathed! </p>
            </div>

            <button type="button" onClick={() => navigate('/CharacterSelection')}>Play Again</button>

        </body>
    );

}

export default Endings;