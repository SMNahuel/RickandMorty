import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import '../../sass/style.css';

const Home = () => {
    const [data, setData] = useState({
        character: [],
        next: ''
    });
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
            .catch(err => console.log(err))
    }, []);

    const nextPage = () => {
        axios.get(data.next)
            .then(res => setData({ ...data, character: res.data.results, next: res.data.info.next }))
            .catch(err => console.log(err))
    }
    return (

        <div className="container">
            <Navbar />
            <div class="cardContainer">
                {
                    data.character && data.character.map((character) => {
                        return (
                            <Card character={character} />
                        )
                    })
                }

            </div>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    );
}

export default Home;