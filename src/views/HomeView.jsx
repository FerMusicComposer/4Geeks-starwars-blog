import React from 'react';
import CharacterCarousel from '../components/CharacterCarousel';
import PlanetsCarousel from '../components/PlanetsCarousel';
import VehiclesCarousel from '../components/VehiclesCarousel';

const HomeView = () => {
    return (
        <div className="bg-dark">
            <div className="container min-vh-100 ">
                <CharacterCarousel />
                <PlanetsCarousel />
                <VehiclesCarousel />
            </div>
        </div>
    );
};

export default HomeView;
