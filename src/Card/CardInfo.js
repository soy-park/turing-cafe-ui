import React from "react";
import "../Card/CardInfo.css";

const CardInfo = ({ key, name, date, time, number }) => {

    return (
        <article className='card'>
            <h2 className="name">{name}</h2>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
            <p className="guests">{number}</p>
        </article>
    )
}

export default CardInfo