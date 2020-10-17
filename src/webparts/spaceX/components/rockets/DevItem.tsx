import * as React from "react";
import "./style.css";

function DevItem(props) {
  const { rocket } = props;
  const img = rocket.flickr_images[0];

  return (
    <li className="dev-item">
      <header>
        {img ? (
          <img src={img} alt={rocket.rocket_id} />
        ) : (
          <img
            src="https://c.files.bbci.co.uk/1001B/production/_113836556_mediaitem113836552.jpg"
            alt={rocket.rocket_id}
          />
        )}
        <div className="user-info">
          <strong>{rocket.rocket_name}</strong>
          <p>{rocket.description}</p>
        </div>
      </header>
      <a href={rocket.wikipedia}>Mais informações</a>
      <p></p>
    </li>
  );
}

export default DevItem;
