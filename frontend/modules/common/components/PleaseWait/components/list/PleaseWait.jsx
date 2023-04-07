import React, { Component } from "react";
import styles from "../../../../styles";
import robot from "../../../../../../assets/robot-05.svg";

const { PleaseWaitMainContainer, CircularLoading } = styles;

class PleaseWait extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <PleaseWaitMainContainer>
          <img
            style={{ color: "rgb(86, 41, 182)", width: "250px" }}
            src={robot}
            alt="please wait"
          />
          <CircularLoading />
          <h3>Please Wait</h3>
        </PleaseWaitMainContainer>
      </React.Fragment>
    );
  }
}

export default PleaseWait;
