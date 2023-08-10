import React from 'react';
import i18n from "../../i18next.js";
import {useTranslation} from "react-i18next";
import icomoon from '../../icomoon.module.css';
import styles from './contacts.module.css';
import Button from "../common/button/button";
import ContactsItem from "./contactsItems/contactsItem.jsx";

const Contacts = (props) => {
	let contacts = styles.contacts;
    let title = styles.title;
    if(props.themecolor !== true)
    {
        contacts += ' ';
        contacts += styles.dark;
        title += ' ';
        title += styles.dark;
    }
    const [ t, i18n ] = useTranslation();
    return (
        <div className={contacts}>
            <h2 className={title}>{t("contacts.title")}</h2>
            <ul className={styles.contactsList}>
                <ContactsItem contactOption = 'GitHub' contactName = "github" contactValue="Lendwye" themecolor = {props.themecolor}/>
				<ContactsItem contactOption = 'Email' contactName = "email" contactValue="lendwye@gmail.com" themecolor = {props.themecolor}/>
				<ContactsItem contactOption = 'Telegram' contactName = "telegram" contactValue="@Lendwye" themecolor = {props.themecolor}/>
				<ContactsItem contactOption = 'Phone' contactName = "phone" contactValue="+79119098002" themecolor = {props.themecolor}/>
            </ul>
        </div>
    );
};

export default Contacts;