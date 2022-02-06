import React from "react";
import './card.css'

export default function Card(props) {
	console.log(props)
	return(
		<>
			{props.data.map(prop => (
				<div className="card">

					<div className="container">
						<img className="card--image" src={prop.imageUrl} alt={prop.title}/>
					</div>

					<div className="card--text">
						<div className="card--header">
							<i className="fas fa-map-marker-alt"></i>
							<p className="card--location">{prop.location}</p>
							<a href={prop.googleMapsUrl}>View on Google Maps</a>
						</div>
						<h1 className="card--title" key={prop.title}>
							{prop.title}
						</h1>
						<h2 className="card-dates" key={prop.startDate}>
							{prop.startDate} - {prop.endDate}
						</h2>
						<p className="card--p">
							{prop.description}
						</p>
					</div>
				</div>
			) )}
		</>
	)
}