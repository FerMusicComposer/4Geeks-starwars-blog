import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

const Navbar = () => {
    const { store, actions } = useContext(AppContext);
    const favorites = store.favorites;

    /////////////////////////////
    //// USE EFFECTS
    /////////////////////////////

    useEffect(() => {
        const getFavs = localStorage.getItem('favorites');
        const loadedFavs = JSON.parse(getFavs);

        if (loadedFavs) {
            actions.setFavorites(loadedFavs);
        }
    }, []);

    useEffect(() => {
        const favJSON = JSON.stringify(favorites);
        localStorage.setItem('favorites', favJSON);
    }, [favorites]);

    //////////////////////////////////////////

    return (
        <nav className="navbar navbar-light bg-dark sticky-top">
            <div className="container-fluid  d-flex justify-content-evenly">
                <Link to="/home">
                    <img
                        className="navbar-brand "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2B1me3pzt547kyYcwl5LWhBJbwRNYaDVUg&usqp=CAU"
                        alt="logo"
                        width="110"
                        height="85"
                    />
                </Link>
                <div></div>
                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle fw-bold font-monospace"
                        type="button"
                        id="favorites"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {favorites.map((favorite, index) => {
                            return (
                                <div key={index}>
                                    <li className="dropdown-item position-relative ">
                                        <span href="...">{favorite}</span>
                                    </li>
                                    <button
                                        className="btn bi bi-x fs-6 position-absolute top-50 end-0 "
                                        onClick={() => {
                                            actions.deletefavorite(index);
                                        }}
                                    ></button>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
