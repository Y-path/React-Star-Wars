import React from "react"

export default function StarShipCard({ starship }) {
    return (
        <div className="card">
            <h2>{starship.name}</h2>
            <h4>Model: <em>{starship.model}</em></h4>
            <h4>Starship Class: <em>{starship.starship_class}</em></h4>
            <h4>Manufacturer: <em>{starship.manufacturer}</em></h4>
            <h4>Crew: <em>{starship.crew}</em></h4>
            <h4>Passengers: <em>{starship.passengers}</em></h4>


        </div>
    );
}