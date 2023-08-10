import React from 'react';
import i18n from "../../i18next.js";
import {useTranslation} from "react-i18next";
import styles from "./home.module.css"
import lendwyeHugeImg from "../../assets/img/lendwyeImgHuge.jpg";
import Button from "../common/button/button";

const Home = (props) => {
    const [ t, i18n ] = useTranslation();
    let title = styles.title;
    let home = styles.home;
    let description = styles.description;
    if(props.themecolor !== true) {
        title += ' ';
        title += styles.dark;
        home += ' ';
        home += styles.dark;
        description += ' ';
        description += styles.dark;
    }
    return (
        <div className={home}>
            <div className={styles.content}>
                <h1 className={title}>{t("home.title")}</h1>
                <p className={description}>{t("home.description")}</p>
                <Button text={t("home.button")} href="https://github.com/Lendwye" themecolor={props.themecolor}/>
            </div>
            <div className={styles.img}></div>
        </div>
    );
};

export default Home;