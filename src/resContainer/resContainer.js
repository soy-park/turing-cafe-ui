import React from "react";
import "./ResContainer.css";
import CardInfo from "../Card/CardInfo";

const ResContainer = ({ reservations, cancelRes }) => {
    const resCards = reservations.map(reservation => {
        return (
            <section className="card">
                <CardInfo 
                    key={reservation.id}
                    name={reservation.name}
                    date={reservation.date}
                    time={reservation.time}
                    number={reservation.number}
                />     
                <button className="cancel" onClick={() => cancelRes(reservation.id)}>Cancel</button>
            </section>
        )
    })

    return (
        <div className="res-container">
            {resCards}
        </div>
    )
}

export default ResContainer;