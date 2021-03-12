const cors = require("cors");
const express = require("express");

const usersData = require("./data/data.json");

// SERVER

// config server
const app = express();
app.use(express.json());

app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

const cards = [];

app.post("/card", (req, res) => {
  // guardar los datos en cards
  // comprobar que todos los datos me los están enviando
  const newCards = cards.push(usersData);
  console.log("hola", cards);
  res.json(usersData);
});
