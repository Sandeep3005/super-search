import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

interface Dimension {
  loaderWidth: string;
  loaderHeight: string;
}
export class SpinLoader extends Component<Dimension, {}> {
  render() {
    const { loaderWidth, loaderHeight } = this.props;
    return (
      <div>
        <Spinner
          animation="grow"
          variant="info"
          style={{ width: loaderWidth, height: loaderHeight }}
        />
      </div>
    );
  }
}

export default SpinLoader;
