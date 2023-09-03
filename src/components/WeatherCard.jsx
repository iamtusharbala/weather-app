import React from "react";

function WeatherCard(props) {
  return (
    <div>
      <div className="card" style={{width: 20 + 'rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <h5 className="card-temperature">{props.temperature}</h5>
          <h5 className="card-conditions">{props.conditions}</h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
