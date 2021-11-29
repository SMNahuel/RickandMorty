import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { requestTo } from 'utils/page';

const Location = ({ locations }) => {

    const dispatch = useDispatch()

    const [location, setLocation] = useState({
        locations: [],
        next: '',
        prev: '',
        pages: []
    });

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then(data => setLocation({ locations: data.data.results, next: data.data.info.next, prev: data.data.info.prev }))
    }, []);

    return (
        <div className="container">
            <div className="ContainerCards">
                {location.locations.map((location, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{location.name}</h5>
                            <p className="card-text">{location.type}</p>
                            <p className="card-text">{location.dimension}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="containerButton">
                <button className="buttonPage" onClick={() => requestTo(dispatch, location.next)}>Back</button>
                <button className="buttonPage" onClick={() => requestTo(dispatch, location.next)}>Next</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    locations: state.locations
})

export default connect(mapStateToProps)(Location);
