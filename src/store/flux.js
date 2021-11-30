const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [],
            characters: [],
            planets: [],
            vehicles: [],
        },
        actions: {
            setFavorites: data => {
                const store = getStore();
                console.log('flux', data);

                const favoritesArray = store.favorites.concat(data);
                console.log('fav aray flux', favoritesArray);
                setStore({ favorites: favoritesArray });
            },
            addToFavorites: favorite => {
                const store = getStore();
                const actions = getActions();

                if (!store.favorites.includes(favorite)) {
                    actions.setFavorites(favorite);
                }
            },

            setCharacters: data => {
                //const store = getStore();
                setStore({ characters: data });
            },
            setPlanets: data => {
                //const store = getStore();
                setStore({ planets: data });
            },
            setVehicles: data => {
                //const store = getStore();
                setStore({ vehicles: data });
            },
            /////////////////////////////
            //// API CALLS
            /////////////////////////////
            fetchPeopleData: async () => {
                //const store = getStore();
                const actions = getActions();

                const url = 'https://www.swapi.tech/api/people/';
                const config = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                const request = await fetch(url, config);
                const response = await request.json();

                const characterUrl = response.results.map(result => result.url);
                let charactersData = [];

                for (let index = 0; index < characterUrl.length; index++) {
                    let characterDataRequest = await fetch(characterUrl[index], config);
                    const characterDataResponse = await characterDataRequest.json();

                    charactersData.push(characterDataResponse);

                    actions.setCharacters(charactersData);
                }
            },
            fetchPlanetData: async () => {
                //const store = getStore();
                const actions = getActions();

                const url = 'https://www.swapi.tech/api/planets/';
                const config = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                const request = await fetch(url, config);
                const response = await request.json();

                const planetsUrl = response.results.map(result => result.url);
                let planetsData = [];

                for (let index = 0; index < planetsUrl.length; index++) {
                    let planetsDataRequest = await fetch(planetsUrl[index], config);
                    const planetsDataResponse = await planetsDataRequest.json();

                    planetsData.push(planetsDataResponse);
                    actions.setPlanets(planetsData);
                }
            },
            fetchVehicleData: async () => {
                const actions = getActions();

                const url = 'https://www.swapi.tech/api/vehicles/';
                const config = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                const request = await fetch(url, config);
                const response = await request.json();

                const vehiclesUrl = response.results.map(result => result.url);
                let vehiclesData = [];

                for (let index = 0; index < vehiclesUrl.length; index++) {
                    let vehiclesDataRequest = await fetch(vehiclesUrl[index], config);
                    const vehiclesDataResponse = await vehiclesDataRequest.json();

                    vehiclesData.push(vehiclesDataResponse);
                    actions.setVehicles(vehiclesData);
                }
            },
        },
    };
};

export default getState;
