import * as React from "react";
import styles from "./SpaceX.module.scss";
import { ISpaceXProps } from "./ISpaceXProps";
import axios from "axios";
import { ISpaceState } from "./rockets/ISpaceState";
import { Header } from "./header/Header";
import SpaceItem from "./rockets/SpaceItem";
import { useState } from "react";

export default class SpaceX extends React.Component<ISpaceXProps, ISpaceState> {
  public constructor(props: ISpaceXProps, state: ISpaceState) {
    super(props);
    this.state = {
      items: [
        {
          rocket_id: "",
          rocket_name: "",
          flickr_images: [],
          description: "",
          wikipedia: "",
        },
      ],
    };
  }

  public componentDidMount() {
    var reactHandler = this;

    axios
      .get(`https://api.spacexdata.com/v3/rockets`)
      .then((response) => {
        // handle success
        reactHandler.setState({
          items: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  public render(): React.ReactElement<ISpaceXProps> {
    return (
      <div className={styles.spaceX}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Header />
              <ul>
                {this.state.items.map((rocket) => (
                  <SpaceItem key={rocket.rocket_id} rocket={rocket} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
