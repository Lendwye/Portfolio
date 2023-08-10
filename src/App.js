import React, {useState} from 'react';
import styles from './App.module.css';
import {Route, Routes} from "react-router-dom";
import Aside from "./components/aside/aside";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import {useTranslation} from "react-i18next";
import Contacts from "./components/contacts/contacts";

function App() {
    const { t, i18n } = useTranslation();
    let [theme, setTheme] = useState(true);
    function changeTheme() {
        setTheme(!theme);
    }
    return (
        <div className={styles.App}>
            <Aside className={styles.Aside} changeTheme={changeTheme} themecolor = {theme}/>
            <div className={styles.Content} themecolor = {theme}>
                <Routes>
                    <Route path="/" element={
                        <Home themecolor = {theme}/>
                    } />
                    <Route path="/projects" element={
                        <Portfolio themecolor = {theme}/>
                    } />
                    <Route path="/contacts" element={
                        <Contacts themecolor = {theme}/>
                    } />
                </Routes>
            </div>
        </div>
    );
}

export default App;
