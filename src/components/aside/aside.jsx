import React from 'react';
import styles from './aside.module.css';
import AsideNav from "./asideNav/asideNav";
import AsideOptions from "./asideOptions/asideOptions";
import AsideSocials from "./asideSocials/asideSocials";
import MobileMenu from "../mobileMenu/mobileMenu";

const Aside = (props) => {
    let asideClass = styles.aside;
    if(props.themecolor != true) {
        asideClass += ' ';
        asideClass += styles.dark;
    }
    return (
        <aside className={asideClass}>
            <AsideOptions themecolor={props.themecolor} changeTheme={props.changeTheme} />
            <div className={styles.mobileHideWrapper}>
                <AsideNav themecolor={props.themecolor} />
            </div>
            <div className={styles.mobileHideWrapper}>
                <AsideSocials themecolor={props.themecolor} />
            </div>
            <MobileMenu themecolor={props.themecolor}/>
        </aside>
    );
};

export default Aside;