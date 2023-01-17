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

var clients ={};

//middelwere
app.use(express.json());
app.use(cors());

//socket.io
io.on("connection", (socket) => {
  console.log("connected");
  console.log(socket.id," Has Connected");
  socket.on("signin", (id) => {
    console.log(id);
    clients[id] = socket;
    console.log(clients);
  })
  socket.on('message', (msg) =>{
    console.log(msg);
  })
});


server.listen(port, "0.0.0.0", () => {
  console.log("Server Started");
});
