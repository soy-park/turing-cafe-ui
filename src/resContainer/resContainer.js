import React from "react";
import "./resContainer.css";
import resContainer from "src/resContainer/resContainer";

function resContainer({ reservations, cancelRes }) {
    const resCards = reservations.map(reservation => {
        return <>
                <Card 
                    key={reservation.id}
                    name={reservation.name}
                    date={reservation.date}
                    time={reservation.time}
                    number={reservation.number}
                />     
                <button className="cancel" onClick={() => cancelRes(reservation.id)}>Cancel</button>
        </>
    })

    return (
        <div className="res-container">
            {resCards}
        </div>
    )
}

export default resContainer;