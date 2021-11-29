import Card from 'components/Card';
import { useEffect, useState } from 'react';
/* -------------------------------------------------Redux */
import { connect } from "react-redux";

const Residents = ({ residents }) => {
    const [state, setState ] = useState(residents)
    useEffect(()=> {
        setState(residents)
    },[residents])
    return (
        <div>
            <div className="cardContainer">
                {
                    state.map((character) => {
                        return (
                            <Card character={character} key={character.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    residents: state.residents
})

export default connect(mapStateToProps)(Residents);
