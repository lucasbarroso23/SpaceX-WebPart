import * as React from "react";
import styles from "./SpaceX.module.scss";
import { ISpaceXProps } from "./ISpaceXProps";
import axios from "axios";
import { ISpaceState } from "./rockets/ISpaceState";
import { Header } from "./header/Header";
import SpaceItem from "./rockets/SpaceItem";
import { Search } from "./search/Search";
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
      query: "",
    };
  }

  public componentDidMount() {
    var reactHandler = this;
    //const query = this.state.query;
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

  public componentDidUpdate = () => {
    if (this.state.query !== "") {
      var reactHandler = this;
      axios
        .get(`https://api.spacexdata.com/v3/rockets?limit=${this.state.query}`)
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
    } else {
      return;
    }
  };

  public render(): React.ReactElement<ISpaceXProps> {
    return (
      <div className={styles.spaceX}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <Header />
              <Search getQuery={(q) => this.setState({ query: q })} />
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
