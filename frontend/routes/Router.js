import axios from "axios";
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import configData from "../config/configData.json";
import { AccountList } from "../modules/components/AccountList";
import { InboundDidMapping } from "../modules/components/InboundDidMapping";

const {
  CURRENT_USER_URL
} = configData

class Router extends Component {
  state = {
    currentUser: {},
    isUserVerified: false,
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            false ? '' : <Navigate to="/accounts" />
          }
        ></Route>
        <Route
          path="/accounts"
          element={
            // this.state.isUserVerified ? 
            <AccountList />
            //  : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/inbounddidmapping/:name"
          element={
            // this.state.isUserVerified ? 
            <InboundDidMapping />
            //  : <Navigate to="/login" />
          }
        ></Route>
      </Routes>
    );
  }
}

export default Router;
