import React, {useState} from 'react';
import styles from './dropDown.module.css';
import icomoon from '../../../icomoon.module.css';
import {useTranslation} from "react-i18next";

const DropDown = (props) => {
    const [ t, i18n ] = useTranslation();
    let dropdownArrow = icomoon.icoarrowDown + ' ' + styles.dropdownArrow;
    let dropdownInput = styles.dropdownInput;
    let dropdownList = styles.dropdownList;
    let [ddArrowRotation, setDDArrowRotation] = useState(true);
    let [inputText, setInputText] = useState(t("currentLanguage"));
    let langs = ['ru', 'en', 'ukr',]
    if(props.themecolor !== true) {
        dropdownArrow += ' ';
        dropdownArrow += styles.dark;
        dropdownInput += ' ';
        dropdownInput += styles.dark;
        dropdownList += ' ';
        dropdownList += styles.dark;
    }
    if(ddArrowRotation) {
        dropdownArrow += ' ';
        dropdownArrow += styles.active;
    }
    else {
        dropdownList += ' ';
        dropdownList += styles.active;
    }
    function setDropDown(e) {
        setInputText(e.target.getAttribute('value'));
        i18n.changeLanguage(e.target.getAttribute('value'));
    }
    function onDropDownButtonClick() {
        setDDArrowRotation(!ddArrowRotation);
    }
    return (
        <div className={styles.dropDownContainer}>
            <form action="" className={styles.dropDown}>
                <input className={dropdownInput} value={inputText}></input>
                <button className={dropdownArrow} type={"button"} onClick={onDropDownButtonClick}></button>
                <ul className={dropdownList}>
                    {langs.map((lang, index) => {
                        if (lang === inputText) {
                            return (
                                <li value={lang} className={styles.dropdownItem + ' ' + styles.active} onClick={setDropDown} key={index}>{lang}</li>
                            )
                        }
                        else {
                            return (
                                <li value={lang} className={styles.dropdownItem} onClick={setDropDown} key={index}>{lang}</li>
                            )
                        }
                    })}
                </ul>
            </form>
        </div>
    );
};

export default DropDown;