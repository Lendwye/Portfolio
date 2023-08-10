import React, {useRef, useState} from 'react';
import styles from './asideOptions.module.css';
import icomoon from '../../../icomoon.module.css'
import i18n from "../../../i18next.js";
import {t} from "i18next";
import DropDown from "../../common/dropDown/dropDown";

const AsideOptions = (props) => {
    let asideOptionsTheme = styles.asideOptionsTheme;
    let asideOptionsLang = styles.asideOptionsLang;
    if(props.themecolor !== true) {
        asideOptionsTheme += ' ';
        asideOptionsTheme += styles.dark;
        asideOptionsLang += ' ';
        asideOptionsLang += styles.dark;
    }
    function changeThemeColor()
    {
        props.changeTheme();
    }
    function changeLang()
    {
        let currentLang = t("currentLanguage");
        switch (currentLang) {
            case 'en':
                i18n.changeLanguage('ru');
                break;
            case 'ru':
                i18n.changeLanguage('ukr');
                break;
            case 'ukr':
                i18n.changeLanguage('en');
                break;
        }
    }
    return (
        <div className={styles.asideOptions}>
            <button className={icomoon.icotheme + ' ' + asideOptionsTheme} onClick={changeThemeColor}></button>
            <button className={icomoon.icoworld + ' ' + asideOptionsLang} onClick={changeLang}></button>
            <DropDown className={styles.asideDropDown} themecolor={props.themecolor}/>
        </div>
    );
};

export default AsideOptions;