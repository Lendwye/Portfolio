import React from 'react';
import icomoon from "../../../icomoon.module.css";
import styles from "./asideSocials.module.css";

const AsideSocials = (props) => {
    let asideSocialsCV = styles.asideSocialsCV;
    if(props.themecolor != true) {
        asideSocialsCV += ' ';
        asideSocialsCV += styles.dark;
    }
    return (
        <div>
            <a target="_blank" href="https://drive.google.com/drive/folders/1-GvjscIMQMif5wFAyFulkfyXKZc3yFXZ?usp=sharing" className={icomoon.icocv  + ' ' + asideSocialsCV}></a>
        </div>
    );
};

export default AsideSocials;