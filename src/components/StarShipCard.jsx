import React from "react"

export default function StarShipCard({ starship }) {
    return (
        <div className="card">
            <h2>{starship.name}</h2>
        </div>
    );
}