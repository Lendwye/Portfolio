import React, {useState} from 'react';
import styles from './mobileMenu.module.css';
import AsideNav from "../aside/asideNav/asideNav";
import AsideSocials from "../aside/asideSocials/asideSocials";

const MobileMenu = (props) => {
    function onButtonClick () {
        setButtonAnimate(!buttonAnimate);
    }
    let adaptiveButton = styles.adaptiveButton;
    let mobileMenuList = styles.mobileMenuList;
    let mobileMenu = styles.mobileMenu;
    let [buttonAnimate, setButtonAnimate] = useState(false);
    if(buttonAnimate == true) {
        adaptiveButton += ' ';
        adaptiveButton += styles.animate;
        mobileMenuList += ' ';
        mobileMenuList += styles.isActive;
    }
    if(props.themecolor !== true) {
        adaptiveButton += ' ';
        adaptiveButton += styles.dark;
    }
    return (
        <div className={mobileMenu}>
            <div className={styles.buttonContainer}>
                <div onClick={onButtonClick} className={adaptiveButton}>
                </div>
            </div>
            <div className={mobileMenuList}>
                <div className={styles.mobileMenuContainer}>
                    <AsideNav themecolor={props.themecolor}/>
                    <AsideSocials themecolor={props.themecolor}/>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;