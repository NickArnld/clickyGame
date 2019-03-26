import React from 'react';
import './styles.css';

function ClickPic(props) {
    return(
        <img src={props.imgLink} 
            className="clickPic" 
            alt="" 
            onClick={() => props.clickHandler(props.id)}
        ></img>
    ); 
}

export default ClickPic;