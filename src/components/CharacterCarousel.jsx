import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';

const CharacterCarousel = () => {
    const { store, actions } = useContext(AppContext);
    const [clicked, setClicked] = useState(false);
    const characters = store.characters;
    const setCharacters = actions.setCharacters;

    const btnOff = 'btn-outline-warning';
    const btnOn = 'btn-warning';

    const isFavorite = name => {
        actions.addToFavorites(name);

        setClicked(true);
    };

    /////////////////////////////
    //// USE EFFECTS
    /////////////////////////////

    useEffect(() => {
        actions.fetchPeopleData();
    }, []);

    useEffect(() => {
        const getData = localStorage.getItem('characters');
        const loadedData = JSON.parse(getData);

        if (loadedData) {
            setCharacters(loadedData);
        }
    }, []);

    useEffect(() => {
        const toJSON = JSON.stringify(characters);

        localStorage.setItem('characters', toJSON);
    }, [characters]);

    return (
        <>
            <h1 className="display-3 text-warning fw-bold font-monospace">Characters</h1>
            <div className="row d-flex flex-row flex-nowrap overflow-auto mb-4">
                {characters.map(
                    ({
                        result: {
                            properties: { name },
                            description,
                            uid,
                            _id,
                        },
                    }) => {
                        return (
                            <div key={uid} className="col-3 w-auto gx-1">
                                <div className="card mx-1" style={{ width: '350px' }}>
                                    <img
                                        src="https://dummyimage.com/350x200/9e9e9e/000000.jpg"
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body bg-secondary">
                                        <h5 className="card-title text-warning fw-bold font-monospace">
                                            {name}
                                        </h5>
                                        <p className="card-text font-monospace text-white">{description}</p>
                                        <Link to={`/character/${_id}`}>
                                            <button className="btn btn-warning fw-bold font-monospace">
                                                Learn more!
                                            </button>
                                        </Link>
                                        <button
                                            className={`btn ${
                                                clicked && store.favorites.includes(name) ? btnOn : btnOff
                                            } float-end`}
                                            onClick={() => isFavorite(name)}
                                        >
                                            <i className="bi bi-star"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </>
    );
};

export default CharacterCarousel;
