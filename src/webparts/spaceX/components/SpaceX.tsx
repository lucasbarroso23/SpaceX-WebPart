import * as React from "react";
import styles from "./SpaceX.module.scss";
import { ISpaceXProps } from "./ISpaceXProps";
import { Header } from "./header/Header";

export default class SpaceX extends React.Component<ISpaceXProps, {}> {
  public render(): React.ReactElement<ISpaceXProps> {
    return (
      <div className={styles.spaceX}>
        <div className={styles.container}>
          <div className={styles.row}>
            <Header />
          </div>
        </div>
      </div>
    );
  }
}
