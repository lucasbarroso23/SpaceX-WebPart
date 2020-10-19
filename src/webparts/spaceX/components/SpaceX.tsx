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
          ship_id: "",
          ship_name: "",
          ship_type: "",
          image: "",
          home_port: "",
          year_built: "",
          weight_kg: "",
          url: "",
        },
      ],
      query: "",
    };
  }

  public componentDidMount() {
    var reactHandler = this;
    axios
      .get(`https://api.spacexdata.com/v3/ships`)
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
        .get(
          `https://api.spacexdata.com/v3/ships?ship_name=${this.state.query}`
        )
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
       var reactHandler = this;
    axios
      .get(`https://api.spacexdata.com/v3/ships`)
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
                {this.state.items.map((ship) => (
                  <SpaceItem key={ship.ship_id} ship={ship} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
