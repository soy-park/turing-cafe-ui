import React from "react";
import "../Card/CardInfo.css";

const CardInfo = ({ cardKey, name, date, time, number }) => {

    return (
        <article className='card-info'>
            <p className="name">{name}</p>
            <p className="date">{date}</p>
            <p className="time">{time} pm</p>
            <p className="guests">Number of guests: {number}</p>
        </article>
    )
}

export default CardInfo