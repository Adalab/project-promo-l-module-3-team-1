const cors = require("cors");
const express = require("express");
// const usersData = require("./data/data.json");

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
  if (req.body.name === "") {
    res.json({
      success: false,
      error: `Mandatory fields: name`,
    });
  } else {
    const userData = req.body;
    const cardId = `id-${cards.length}`;
    userData.id = cardId;
    // guardar los datos en cards
    // comprobar que todos los datos me los están enviando

    cards.push(userData);
    console.log(cards);
    res.json({
      success: true,
      cardURL: `http://localhost:3000/card/${cardId}`,
    });
  }
});
