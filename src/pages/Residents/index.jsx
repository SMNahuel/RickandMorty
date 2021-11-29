import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'components/Card';

const Residents = ({ url }) => {
    const [residents, setResidents] = useState([])
    useEffect(() => {
        axios.get(url).then(result => {
            setResidents(result.data.results)
        })
    })
    return (
        <div>
            {
                residents.map(resident => {
                    <Card character={resident}/>
                })
            }
        </div>
    )
}

export default Residents;