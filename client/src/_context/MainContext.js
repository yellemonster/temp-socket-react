//
import React, { Component, createContext } from "react";
import socketIOClient from "socket.io-client";
//
export const MainContext = createContext();
//
//==================================================================
const URL = "ws://localhost:8080";
//==================================================================
//
const TIME_STAMP = "TIME_STAMP";
const CONN_COUNT = "CONN_COUNT";
//
//==================================================================

export class MainContextProvider extends Component {
  //
  //
  constructor() {
    super();
    this.state = {
      isLoading: true,
      socket: null,
      timeStamp: "",
      conns: "",
    };
  }
  componentDidMount() {
    //
    let socket = socketIOClient(URL);
    //
    // =============================================================
    socket.on("TEST_FINI", (data) => {
      console.log("Test res => ", data);
    });
    socket.on(TIME_STAMP, (data) => {
      this.UPD_el("timeStamp", data);
    });
    socket.on(CONN_COUNT, (data) => {
      this.UPD_el("conns", data);
    });
    // =============================================================
    //
    this.UPD_el("socket", socket);
    this.UPD_el("isLoading", false);
  }
  componentWillUnmount() {
    this.state.socket.disconnect();
  }
  UPD_el = (n, el) => {
    this.setState({ [n]: el });
  };
  CLR_el = (n) => {
    this.setState({ [n]: null });
  };
  EMIT = (event, payload) => {
    this.state.socket.emit(event, payload);
  };
  render() {
    //
    return (
      <MainContext.Provider
        value={{
          ...this.state,
          UPD_el: this.UPD_el,
          CLR_el: this.CLR_el,
          EMIT: this.EMIT,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
//
export default MainContextProvider;
