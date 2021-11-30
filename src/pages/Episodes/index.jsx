import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Episodes = () => {
    const [episodes, setEpisodes] = useState({
        season: {
            s1: [],
            s2: [],
            s3: [],
            s4: [],
        },
        episodes: [],
        next: '',
        prev: '',
    });
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then(data => setEpisodes({ episodes: data.data.results, next: data.data.info.next, prev: data.data.info.prev }))
    }, []);

    const nextPage = () => {
        /* -------------------------------------------------Request next page */
        axios.get(episodes.next)
            .then(res => setEpisodes({ ...episodes, episodes: res.data.results, next: res.data.info.next, prev: res.data.info.prev }))
            .catch(err => console.log(err))
    }

    const backPage = () => {
        /* -------------------------------------------------Request back page */
        axios.get(episodes.prev)
            .then(res => setEpisodes({ ...episodes, episodes: res.data.results, next: res.data.info.next, prev: res.data.info.prev ? res.data.info.prev : '' }))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="ContainerCards">
                {
                    episodes.episodes.map(episode => {
                        return (
                            <div className="card" key={episode.id}>
                                <div className="cardBody">
                                    <h5 className="card-title">{episode.name}</h5>
                                    <p className="card-text">{episode.air_date}</p>
                                    <p className="card-text">{episode.episode}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className="containerButton">
                {
                    episodes.prev ? <button className="buttonPage" onClick={() => backPage()}>Back</button> : <button className="buttonPageDisable">Back</button>
                }
                {
                    episodes.next ? <button className="buttonPage" onClick={() => nextPage()}>Next</button> : <button className="buttonPageDisable">Next</button>
                }
            </div>
        </div>
    )

}


export default Episodes;