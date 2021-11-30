import axios from "axios";
import CardCharacter from "components/CardCharacter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Character = () => {
    const { pathname } = useLocation();
    const [state, setState] = useState({ 
        id : pathname.split("/").pop(),
        character: ""
    })
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${pathname.split("/").pop()}`)
            .then(data => setState({...state, character:data.data}))
    },[])
    return (
        <div>
          {state.character && <CardCharacter character={state.character}/>}
        </div>
    )
}

export default Character;