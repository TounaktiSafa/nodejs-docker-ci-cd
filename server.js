const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log("User Joined Room: " + data);
    });
  

    socket.on("send_message", (data) => {
      console.log(data);
      io.to(data.room).emit("receive_message", data.content);
    });
    





    socket.on("send_message", (data) => {
      console.log(data);
      socket.to(data.room).emit("receive_message", data.content);
    });
  
    socket.on("disconnect", () => {
      console.log("USER DISCONNECTED");
    });
});

// Importation des routes et autres middlewares
require('./config/connect'); // Assurez-vous que le chemin est correct
const repairagent = require('./routes/repairAgent');
const service = require('./routes/repairService');
const phone =require('./routes/phone');
app.use(cors());
app.use(express.json());
app.use('/repairAgent', repairagent);
app.use('/service', service);
app.use('/phone',phone);
const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
