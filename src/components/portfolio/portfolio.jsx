import React, {useState, useEffect} from 'react';
import i18n from "../../i18next.js";
import {useTranslation} from "react-i18next";
import Slider from "../common/swiper/swiper";
import styles from "./portfolio.module.css";
import Button from "../common/button/button";

const Portfolio = (props) => {
    function setSlide(num) {
        setCurrentSlide(num);
		switch(num) {
			case 1:
				setCurrentProject("lapgrad");
				break;
			case 2:
				setCurrentProject("beregdiamonds");
				break;
			case 3:
				setCurrentProject("zlatmax");
				break;
			case 4:
				setCurrentProject("houseVOP");
				break;
			case 5:
				setCurrentProject("appLab");
				break;
		}
    }
    let portfolio = styles.portfolio;
    let title = styles.title;
    let projectTitle = styles.projectTitle;
    let projectDescription = styles.projectDescription;
    let characteristicsItem = styles.characteristicsItem;
    if(props.themecolor !== true) {
        portfolio += ' ';
        portfolio += styles.dark;
        title += ' ';
        title += styles.dark;
        projectTitle += ' ';
        projectTitle += styles.dark;
        projectDescription += ' ';
        projectDescription += styles.dark;
        characteristicsItem += ' ';
        characteristicsItem += styles.dark;
    }
    let [currentSlide, setCurrentSlide] = useState(1);
    let [currentProject, setCurrentProject] = useState("zlatmax");
    const [ t, i18n ] = useTranslation();
	console.log(currentProject)
    return (
        <div className={portfolio}>
            <h3 className={title}>{t("portfolio.title")}</h3>
            <div className={styles.content}>
                <Slider className={styles.slider} currentProject={currentProject} setSlide={setSlide}/>
                <div className={styles.description}>
                    <div className={styles.descriptionContent}>
                        <h4 className={projectTitle}>
                            {t("portfolio.projects." + currentProject + ".title")}
                        </h4>
                        <p className={projectDescription}>
                            {t("portfolio.projects." + currentProject + ".description")}
                        </p>
                        <div className={styles.projectButton}>
                            <Button className={styles.projectButton} href={t("portfolio.projects." + currentProject + ".href")} text={t("portfolio.button")} themecolor={props.themecolor}/>
                        </div>
                    </div>
                </div>
                <div className={styles.characteristics}>
                    <ul className={styles.characteristicsOptions}>
                        <li className={characteristicsItem}>
                            {t("portfolio.characteristics.tech")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.characteristics.time")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.characteristics.adaptive")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.characteristics.pages")}
                        </li>
                    </ul>
                    <ul className={styles.characteristicsValues}>
                        <li className={characteristicsItem}>
                            {t("portfolio.projects." + currentProject + ".characteristics.tech")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.projects." + currentProject + ".characteristics.time")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.projects." + currentProject + ".characteristics.adaptive")}
                        </li>
                        <li className={characteristicsItem}>
                            {t("portfolio.projects." + currentProject + ".characteristics.pages")}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;