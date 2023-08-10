import React, {useState} from 'react';
import i18n from "../../../i18next.js";
import {useTranslation} from "react-i18next";
import styles from './asideNav.module.css';
import icomoon from '../../../icomoon.module.css';
import {NavLink} from "react-router-dom";

const AsideNav = (props) => {
    function onLinkClick(e) {
        setCurrentPage(e.target.getAttribute("page"));
    }
    let [currentPage, setCurrentPage] = useState(window.location.pathname);
    let asideNavImg = styles.asideNavImg;
    const [ t, i18n ] = useTranslation();
    let links = ['/', '/projects', '/contacts'];
    let linkstext = [t("mobileMenu.home"), t("mobileMenu.portfolio"), t("mobileMenu.contacts")];
    let linksimg = [icomoon.icohome, icomoon.icoportfolio, icomoon.icomail]
    let isThemeDark = '';
    if(props.themecolor != true) {
		asideNavImg += ' ';
		asideNavImg += styles.dark;
    }
    return (
        <nav className={styles.asideNav}>
            <ul className={styles.asideNavList}>
                {links.map((link, index) => {
                    if(currentPage == link) {
                        return <li className={styles.asideNavItem} key={index}>
                            <NavLink to={link} className={styles.asideNavLink} onClick={onLinkClick} page={link}>
                                <span className={linksimg[index] + ' ' + asideNavImg + ' ' + styles.currentLink} page={link}></span>
                                <span className={styles.linkstext} page={link}>{linkstext[index]}</span>
                            </NavLink>
                        </li>
                    }
                    return <li className={styles.asideNavItem} key={index} page={link}>
                        <NavLink to={link} className={styles.asideNavLink} onClick={onLinkClick}>
                            <span className={linksimg[index] + ' ' + asideNavImg} page={link}></span>
                            <span className={styles.linkstext} page={link}>{linkstext[index]}</span>
                        </NavLink>
                    </li>
                })}
            </ul>
        </nav>
    );
};

export default AsideNav;