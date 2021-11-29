import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
    let history = useNavigate();
    return(
        <div className="containerHome">
            <div className="Character" onClick={() =>  history("/characters")}>
                <p>Personajes</p>
            </div>
            <div className="Episode" onClick={() =>  history("/episode")}>
                <p>Episodios</p>
            </div>
            <div className="Location" onClick={() =>  history("/locations")}>
                <p>Lugares</p>
            </div>
            <div className="Species" onClick={() =>  history("/speciescharacter")}>
                <p>Especies</p>
            </div>
        </div>
    )
}

export default Home;