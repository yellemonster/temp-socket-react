//
const TIME_STAMP = (io) => {
  io.emit("TIME_STAMP", new Date());
};
const CONN_COUNT = (io, conns) => {
  io.emit("CONN_COUNT", conns);
};
const TEST = (io, socket) => {
  socket.on("TEST_INIT", (payload) => {
    io.emit("TEST_FINI", { ...payload, res: "Test was a success" });
  });
};
//
module.exports = { TEST, TIME_STAMP, CONN_COUNT };
