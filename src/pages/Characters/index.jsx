/* -------------------------------------------------Modules */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* -------------------------------------------------Redux */
import { connect } from "react-redux";

/* -------------------------------------------------Components */
import Card from 'components/Card';
import Filter from 'components/Filter';


const Character = ({ search, filter, status, gender }) => {

    const [data, setData] = useState({
        character: [],
        next: '',
        previous: '',
        search: search ? search : null
    });

    useEffect(() => {
        const paramsToRequest = () => {
            if (status && gender) return `?status=${status}&gender=${gender}`
            if (gender) return `?gender=${gender}`
            if (status) return `?status=${status}`
        }

        /* -------------------------------------------------Request */
        if (search) {
            axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
                .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
                .catch(err => console.log(err))
        } else {
            axios.get('https://rickandmortyapi.com/api/character/')
                .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
                .catch(err => console.log(err))
        }
        if (filter) {
            let filters = paramsToRequest()
            axios.get(`https://rickandmortyapi.com/api/character/${filters}`)
                .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
                .catch(err => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, gender, status]);

    const nextPage = () => {
        /* -------------------------------------------------Request next page */
        axios.get(data.next)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next, previous: res.data.info.prev }))
            .catch(err => console.log(err))
    }

    const backPage = () => {
        /* ------------------------------------------------Request back page */
        axios.get(data.previous)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next, previous: res.data.info.prev ? res.data.info.prev : '' }))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <Filter />
            <div className="cardContainer">
                {
                    data.character && data.character.map((character) => {
                        return (
                            <Card character={character} key={character.id} />
                        )
                    })
                }
            </div>
            <div className="containerButton">
                {
                    data.previous ? <button className="buttonPage" onClick={backPage}>Back</button> : <button className="buttonPageDisable">Back</button>
                }
                {
                    data.next ? <button className="buttonPage" onClick={nextPage}>Next</button> : <button className="buttonPageDisable">Back</button>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    search: state.search,
    filter: state.filter,
    gender: state.gender,
    status: state.status
})

export default connect(mapStateToProps)(Character);