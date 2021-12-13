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

    const Scenarios_imgstyle={
        width: "100px",
        height: "100px",
        marginRight: "700px"
    }

    const Scenarios_pstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginRight: "700px",

        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Scenarios_livesstyle={
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        marginTop: "-100px",
        marginBottom: "100px",
     
        fontFamily: "Copperplate",
        fontSize: "25px",
        textDecoration: "none",
        textTransform: "none",
        whiteSpace: "nowrap"
    }

    const Scenarios_p2style={
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

    const Scenarios_buttonstyle={
        fontFamily: "Copperplate",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "22px",
        lineHeight: "28px",
        textAlign: "center",
        textTransform: "uppercase",
        padding: "20px",

        color: "black",
        backgroundColor: "grey"
    }

    return (
        <body>
            <header>
                <img style={Scenarios_imgstyle} src={character1} width="25%" height="25%" class="logo" alt="TBD Logo" />
                <p style={Scenarios_pstyle}> Character Name{characterName} </p>
                <p style={Scenarios_livesstyle}>Lives</p>
            </header>
            <div>
                <p style={Scenarios_p2style}> Beginning: Blah </p>
            </div>
            <div className="options">
                <p style={Scenarios_p2style}> What would {characterName} do next? </p>

                <button style={Scenarios_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 1<br />
                    character1.option1</button>
                <button style={Scenarios_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 2<br />
                    character1.option2</button>
                <button style={Scenarios_buttonstyle} type="button" onClick={() => navigate('/Endings')}>Option 3<br />
                    character1.option3</button>
            </div>
        </body>
    );

}

export default Scenarios;