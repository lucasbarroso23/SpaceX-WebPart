import * as React from "react";
import SpaceItem from "./rockets/SpaceItem";
import Api from "../utils/Api";
import { ISpaceXProps } from "./ISpaceXProps";
import { ISpaceState } from "./rockets/ISpaceState";
import { Header } from "./header/Header";
import { Search } from "./search/Search";
import { Modal } from "./modal/Modal";

import styles from "./SpaceX.module.scss";

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
      selectedImg: null,
    };
  }

  public componentDidMount() {
    var reactHandler = this;
    Api.apiCall(reactHandler);
  }

  public componentDidUpdate = () => {
    var reactHandler = this;
    this.state.query
      ? Api.apiNameCall(reactHandler, this.state.query)
      : Api.apiCall(reactHandler);
  };

  public handleImg = (image) => {
    var reactHandle = this;

    reactHandle.setState({
      selectedImg: image,
    });
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
                  <SpaceItem
                    key={ship.ship_id}
                    ship={ship}
                    setSelectedImg={this.handleImg}
                  />
                ))}
              </ul>
              {this.state.selectedImg && (
                <Modal
                  selectedImg={this.state.selectedImg}
                  setSelectedImg={this.handleImg}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
