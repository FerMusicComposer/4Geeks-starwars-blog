import React, { useState, useEffect } from 'react';
import getState from './flux';

export const AppContext = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updateStore =>
                    setState({
                        store: Object.assign(state.store, updateStore),
                        actions: { ...state.actions },
                    }),
            }),
        );

        useEffect(() => {});

        return (
            <AppContext.Provider value={state}>
                <PassedComponent {...props} />
            </AppContext.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;
