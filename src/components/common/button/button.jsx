import React, {Fragment} from 'react';
import styles from "./button.module.css";

const Button = (props) => {
    let buttonShadow = styles.buttonShadow;
    if(props.themecolor !== true) {
        buttonShadow += ' ';
        buttonShadow += styles.dark;
    }
    return (
        <Fragment>
            <div className={styles.buttonContainer}>
                <a className={styles.button} target="_blank" href={props.href}>{props.text}</a>
                <span className={buttonShadow}></span>
            </div>
        </Fragment>
    );
};

export default Button;