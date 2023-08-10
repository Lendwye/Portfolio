import React, {useState, useEffect} from 'react';
import i18n from "../../../i18next.js";
import {useTranslation} from "react-i18next";
import icomoon from '../../../icomoon.module.css';
import styles from './contactsItem.module.css';
import Button from "../../common/button/button";
const ContactsItem = (props) => {
	const [ t, i18n ] = useTranslation();
    let title = styles.title;
    let contactsText = styles.contactsText;
    let contact = styles.contact;
	let contactImg = '';
	switch (props.contactName){
		case 'github':
			contactImg = styles.contactsImg + ' ' + icomoon.icogithub;
			break;
		case 'email':
			contactImg = styles.contactsImg + ' ' + icomoon.icomail;
			break;
		case 'telegram':
			contactImg = styles.contactsImg + ' ' + icomoon.icotelegram;
			break;
		case 'phone':
			contactImg = styles.contactsImg + ' ' + icomoon.icophone;
			break;
	}
	if(props.themecolor !== true)
    {
        contactsText += ' ';
        contactsText += styles.dark;
        contact += ' ';
        contact += styles.dark;
    }
    return (
		<li className={styles.contactsItem}>
			<div className={styles.contactsOption}>
				<span
					className={contactImg}
				>
				</span>
				<span
					className={contactsText}
				>
					{props.contactOption}
				</span>
			</div>
				<div className={styles.contactsValue}>
				<span
					className={contact}
				>
					{props.contactValue}
				</span>
				<div className={styles.contactsButtonContainer}>
					<Button
						className={styles.contactsButton}
						href={t("contacts.button." + props.contactName + ".address")}
						text={t("contacts.button." + props.contactName + ".text")} themecolor={props.themecolor}
					/>
				</div>
			</div>
		</li>
    );
};

export default ContactsItem;