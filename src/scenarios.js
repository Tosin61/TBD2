import React from 'react';
import character1 from './Images/TBD character.PNG';
//import character2 from './Images/TBD character.PNG';
//import character3 from './Images/TBD character.PNG';
//import character4 from './Images/TBD character.PNG';
import { useNavigate } from 'react-router-dom';

function Scenarios({ characterName }) {

    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route)
    }

    /*
     * depending on the character that was passed from CharacterSelection, 
     * we want to show a certain bio 
     */

    /*
     * we need a data type to handle the character's information to pass,
     * as well as a data type to handle how many (image) hearts to show
     */

    /*
     * we only want to change route to endings on the last scenario
     */

    return (
        <body>
            <header>
                <img src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p> characterName={characterName} </p>
                lives
            </header>
            <div>
                <p> Beginning: Blah </p>
            </div>
            <div className="options">
                <p> What would {characterName} do next? </p>

                <button type="button" onClick={() => navigate('/Endings')}>Option 1<br />
                    character1.option1</button>
                <button type="button" onClick={() => navigate('/Endings')}>Option 2<br />
                    character1.option2</button>
                <button type="button" onClick={() => navigate('/Endings')}>Option 3<br />
                    character1.option3</button>
            </div>
        </body>
    );

}

export default Scenarios;