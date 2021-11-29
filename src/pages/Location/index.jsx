import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { requestTo, firstRequest, requestResidents } from 'utils/page';
import { useNavigate } from 'react-router';
const Location = ({ locations }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        firstRequest(dispatch)
    }, []);

    const handleResidents = (residents) => {
        requestResidents(dispatch, residents, navigate)
    }

    return (
        <div className="container">
            <div className="ContainerCards">
                {locations.data.map((location, index) => (
                    <div key={index} className="card">
                        <div className="cardBody">
                            <h5 className="card-title">{location.name}</h5>
                            <p className="card-text">{location.type}</p>
                            <p className="card-text">{location.dimension}</p>
                            {
                                location.residents.length === 0 ? 
                                <button className="buttonResidentes">Sin residentes :(</button> : 
                                <button className="buttonResidentes" onClick={() => handleResidents(location.residents)}>Residentes</button>
                            }

                        </div>
                    </div>
                ))}
            </div>
            <div className="containerButton">
                {
                    !locations.prev ?
                        <button className="buttonPageDisable">Back</button>
                        :
                        <button className="buttonPage" onClick={() => requestTo(dispatch, locations.prev)}>Back</button>
                }

                {
                    !locations.next ?
                        <button className="buttonPageDisable">Next</button>
                        :
                        <button className="buttonPage" onClick={() => requestTo(dispatch, locations.next)}>Next</button>
                }

            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    locations: state.locations
})

export default connect(mapStateToProps)(Location);
