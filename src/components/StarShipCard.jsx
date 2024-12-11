import React from "react"

export default function StarShipCard({ starship }) {
    return (
        <div className="card">
            <h2>{starship.name}</h2>
            <h4>Model: {starship.model}</h4>
            <h4>Starship Class: {starship.starship_class}</h4>
            <h4>Manufacturer: {starship.manufacturer}</h4>
        </div>
    );
}