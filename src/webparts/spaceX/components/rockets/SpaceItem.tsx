import * as React from "react";
import "./style.css";

function SpaceItem({ ship, setSelectedImg }) {
  return (
    <li className="space-item">
      <header>
        {ship.image ? (
          <img
            src={ship.image}
            alt={ship.ship_id}
            onClick={() => setSelectedImg(ship.image)}
          />
        ) : (
          <img
            style={{ cursor: "not-allowed" }}
            src="https://media-exp1.licdn.com/dms/image/C510BAQGFPKF9SNeb4g/company-logo_200_200/0?e=2159024400&v=beta&t=KwT2Dj6PcVQxW0tq_dhU_CUjmaAgoHbwqIo0SG1ChYs"
            alt={ship.ship_id}
          />
        )}

        <div className="info">
          <strong>{ship.ship_name}</strong>
          <p>{ship.type}</p>
          <p>{ship.home_port}</p>
          <p>Built in {ship.year_built}</p>
          <p>Weight: {ship.weight_kg}kg</p>
        </div>
      </header>
      <a href={ship.url} target="_blank">
        More information
      </a>
    </li>
  );
}

export default SpaceItem;
