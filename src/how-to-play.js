import React from 'react';
import logo from './Images/TBD Logo.PNG';
import { useNavigate } from 'react-router-dom';

function HowToPlay() {
    //change pages
    let navigate = useNavigate();
    function routeChange(route) {
        navigate(route);
    }

    return (
        <body>
            <img src={logo} width="25%" height="25%" class="logo" alt="TBD Logo" />

            <p>
            You must correctly make decisions on what the<br/>
            middle of the story looks like based off your<br/>
            character's personality. Correctly determine what<br/>
            your character would do in the given scenarios to<br/>
            get from the beginning to the end.
            </p >

            <button type="button" onClick={() => navigate('/CharacterSelection')}>Next</button>
        </body>
    );

}

export default HowToPlay;