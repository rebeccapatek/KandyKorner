import React from "react"
import "./Location.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address"> {location.address}</div>
        <div className="location__square">Square Footage: {location.squareFootage} ft.</div>
        <div className="location__handi">{location.handicapAccess ? "Handicap accessible": "Not Handicap accesible"}</div>
    </section>
)