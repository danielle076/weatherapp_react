import React from 'react';
import ReactDOM from 'react-dom';
import TempContextProvider from './context/TempContextProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <TempContextProvider>
            <App />
        </TempContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();