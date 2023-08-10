import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import i18n from "../../../i18next";
import {useTranslation} from "react-i18next";
import styles from "./swiper.module.css";
import zlatmaxImg from "../../../assets/img/portfolioZlatmax.png";
import houseVOPImg from "../../../assets/img/portfolioHouseVOP.png";
import AppLabImg from "../../../assets/img/portfolioAppLab.png";
import Lapgrad from "../../../assets/img/lapgrad.png";
import BeregDiamonds from "../../../assets/img/beregdiamonds.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider (props) {
    const [ t, i18n ] = useTranslation();
    return (
        <Swiper
            className={styles.swiper}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // onSwiper={(swiper) => props.setSlide(swiper.realIndex + 1)}
			onSwiper={(swiper) => props.setSlide(swiper.realIndex + 1)}
            // onSlideChange={(swiper) => props.setSlide(swiper.realIndex + 1)}
			onSlideChange={(swiper) => props.setSlide(swiper.realIndex + 1)}
        >
			<SwiperSlide>
                <a className={styles.link} href={t("portfolio.projects." + props.currentProject + ".href")}>
                    <img className={styles.img} src={Lapgrad} alt=""/>
                </a>
            </SwiperSlide>
			<SwiperSlide>
                <a className={styles.link} href={t("portfolio.projects." + props.currentProject + ".href")}>
                    <img className={styles.img} src={BeregDiamonds} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a className={styles.link} href={t("portfolio.projects." + props.currentProject + ".href")}>
                    <img className={styles.img} src={zlatmaxImg} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a className={styles.link} href={t("portfolio.projects." + props.currentProject + ".href")}>
                    <img className={styles.img} src={houseVOPImg} alt=""/>
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a className={styles.link} href={t("portfolio.projects." + props.currentProject + ".href")}>
                    <img className={styles.img} src={AppLabImg} alt=""/>
                </a>
            </SwiperSlide>
            <br className={styles.br}/>
            <br className={styles.br}/>
            <br className={styles.br}/>
            <br className={styles.br}/>
            <br className={styles.br}/>
        </Swiper>
    );
}
export default Slider;