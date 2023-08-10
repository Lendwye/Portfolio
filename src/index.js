import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from'./index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    	<App className={styles.app}/>
    </HashRouter>
);

reportWebVitals();
