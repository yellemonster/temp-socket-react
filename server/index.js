//==================================================================
//==================================================================
//
const express = require("express");
const http = require("http");
const cors = require("cors");
const index = require("./routes/index");
//
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: true });
//
//==================================================================
//==================================================================
//
const { CONN_COUNT, TIME_STAMP, TEST } = require("./events");
//
//==================================================================
//==================================================================
//
app.use(index);
app.use(cors());
//
//==================================================================
//==================================================================
//
let connections = 0;
let interval = null;
//
io.on("connection", (socket) => {
  //
  connections++;
  CONN_COUNT(io, connections);
  TEST(io, socket);
  //
  if (interval === null) {
    interval = setInterval(() => {
      TIME_STAMP(io);
    }, 1000);
  }
  //
  socket.on("disconnect", () => {
    connections--;
    CONN_COUNT(io, connections);
  });
});
//
//==================================================================
//==================================================================
//
server.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
