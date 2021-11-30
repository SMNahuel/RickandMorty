import axios from "axios"
import Select from "components/Select"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Card from "../../components/Card"

const Species = ({ species }) => {

    const [state, setState] = useState({
        next: null,
        prev: null,
        search: species,
        results: []
    })

    useEffect(() => {
        if (species) {
            axios.get(`https://rickandmortyapi.com/api/character/?species=${species}`)
                .then(data => {
                    setState({ ...state, results: data.data.results, next: data.data.info.next, prev: data.data.info.prev })
                })
        }
    }, [species])
    const nextPage = () => {
        /* -------------------------------------------------Request next page */
        axios.get(state.next)
            .then(res => setState({ ...state, results: res.data.results, next: res.data.info.next, prev: res.data.info.prev }))
            .catch(err => console.log(err))
    }

    const backPage = () => {
        /* -------------------------------------------------Request back page */
        axios.get(state.prev)
            .then(res => setState({ ...state, results: res.data.results, next: res.data.info.next, prev: res.data.info.prev ? res.data.info.prev : '' }))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Select />
            <div className="cardContainer">
                {
                    state.results.length !== 0 &&
                    state.results.map(result => {
                        return (
                            <Card character={result} />
                        )
                    })
                }
            </div>
            {
                state.results.length !== 0 &&
                <div className="containerButton">
                {
                    state.prev ? <button className="buttonPage" onClick={() => backPage()}>Back</button> : <button className="buttonPageDisable">Back</button>
                }
                {
                    state.next ? <button className="buttonPage" onClick={() => nextPage()}>Next</button> : <button className="buttonPageDisable">Next</button>
                }
            </div>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        species: state.species
    }
}
export default connect(mapStateToProps)(Species)
