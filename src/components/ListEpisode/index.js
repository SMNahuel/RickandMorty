import axios from "axios";
import { useEffect, useState } from "react";

const ListEpisode   = ({episode}) => {
    const [state,setState] = useState()
    useEffect(async() => {
        await axios.get(episode).then(data => {
            setState(data.data)
        })
    },[])
    return(
        <div className="episode">
            <p>Nº {state && state.id} - {state && state.name}</p>
        </div>
    )
}

export default ListEpisode;