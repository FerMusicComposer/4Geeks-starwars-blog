import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import WelcomeView from './views/WelcomeView';
import HomeView from './views/HomeView';
import CharacterView from './views/CharacterView';
import PlanetView from './views/PlanetView';
import VehicleView from './views/VehicleView';
import Navbar from './components/Navbar';
import injectContext from './store/AppContext';

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <WelcomeView />
                </Route>
                <Route exact path="/home">
                    <HomeView />
                </Route>
                <Route exact path="/character/:id">
                    <CharacterView />
                </Route>
                <Route exact path="/planet/:id">
                    <PlanetView />
                </Route>
                <Route exact path="/vehicle/:id">
                    <VehicleView />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
