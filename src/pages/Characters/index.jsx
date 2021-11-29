/* -------------------------------------------------Modules */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* -------------------------------------------------Redux */
import { connect } from "react-redux";

/* -------------------------------------------------Components */
import Card from 'components/Card';


const Character = React.memo(({search}) => {

    const [data, setData] = useState({
        character:[],
        next: '',
        previous: '',
        search: search ? search : null
    });

    useEffect(() => {
        /* -------------------------------------------------Request */
        if(search){
            axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
            .catch(err => console.log(err))
        }else{
            axios.get('https://rickandmortyapi.com/api/character/')
                .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
                .catch(err => console.log(err))
        }
    }, [search]);

    const nextPage = () => {
        /* -------------------------------------------------Request next page */
        axios.get(data.next)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next, previous: res.data.info.prev }))
            .catch(err => console.log(err))
    }

    const backPage = () => {
        /* -------------------------------------------------Request back page */
        axios.get(data.previous)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next, previous: res.data.info.prev ? res.data.info.prev : '' }))
            .catch(err => console.log(err))
    }
    
    return (

        <div className="container">
            
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
                <button className="buttonPage" onClick={() => backPage()}>Back</button>
                <button className="buttonPage" onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    );
});

const mapStateToProps = (state) => ({
    search: state.search
})

export default connect(mapStateToProps)(Character);