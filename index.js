const express = require("express");
var http = require("http");
const cors = require("cors");
// const { Socket } = require("socket.io");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

//middelwere
app.use(express.json());
app.use(cors());

//socket.io
io.on("Connection", (socket) => {
  console.log("connected");
});
server.listen(port, () => {
  console.log("Server Started");
});
