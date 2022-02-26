import React, { useContext } from "react";
import { MainContext } from "../_context/MainContext";
//
import moment from "moment";
import Datafield from "./generics/Datafield";
import Btn from "./generics/Btn";
//
//==================================================================
function App() {
  //
  const { timeStamp, conns, EMIT } = useContext(MainContext);
  //
  return (
    <div className="App">
      <div className="Panel" style={{ width: "350px" }}>
        <Datafield
          label={"Data"}
          value={moment(timeStamp).format("MMMM Do YYYY,  h:mm a")}
        />
      </div>
      <div className="Panel">
        <Datafield label={"Connections"} value={conns} />
      </div>
      <Btn
        label={"Socket Test"}
        onClick={() => {
          EMIT("TEST_INIT", { msg: "Test Init" });
        }}
      />
    </div>
  );
}

export default App;
