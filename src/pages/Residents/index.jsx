import Card from 'components/Card';
import { useEffect, useState } from 'react';
/* -------------------------------------------------Redux */
import { connect } from "react-redux";
import Filter from 'components/Filter';
import { filterGender, filterGenderStatus, filterStatus } from '../../utils/page';

const Residents = ({ residents, gender, status, filter }) => {
    const [state, setState] = useState(residents)

    useEffect(() => {
        const handleFilter = () => {
            let newContainer = []
            if (filter) {
                if (gender !== null && status !== null) {
                    newContainer = filterGenderStatus(residents, gender, status)
                } else if (gender) {
                    newContainer = filterGender(residents, gender)
                } else if (status) {
                    newContainer = filterStatus(residents, status)
                }
            }
            setState(newContainer)
            newContainer = []
        }
        handleFilter()
    }, [gender, status,filter,residents])



    return (
        <div>
            <Filter />
            <div className="cardContainer">
                {
                    filter && state.map((character) => {
                        return (
                            <Card character={character} key={character.id} />
                        )
                    })
                }
            </div>

            <div className="cardContainer">
                {
                    !filter && residents.map((character) => {
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
    residents: state.residents,
    gender: state.gender,
    status: state.status,
    filter: state.filter
})

export default connect(mapStateToProps)(Residents);
