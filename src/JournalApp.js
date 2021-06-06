import React from 'react'
import { AppRouter } from './routers/AppRouter';
import './styles/styles.scss';
import { Provider } from 'react-redux'
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter  />
        </Provider>
    )
}
