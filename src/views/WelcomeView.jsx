import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeView = () => {
    return (
        <div className="container-fluid bg-dark min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <Link to="/home">
                <img
                    className="ratio ratio-4x3"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Star_wars_logo_alternate.svg/694px-Star_wars_logo_alternate.svg.png"
                    alt="welcome logo"
                />
                <h3 className="text-center text-warning text-decoration-underline display-5 font-monospace fw-bold">
                    Click me!
                </h3>
            </Link>
        </div>
    );
};

export default WelcomeView;
