const cors = require("cors");
const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");
const { response } = require("express");
// SERVER

// config server
const app = express();
app.use(express.json());

app.use(cors());
app.set("view engine", "ejs");
// init express aplication
const serverPort = process.env.PORT || 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
const db = new Database("./src/data/cards.db", {
  // this line log in console all data base queries
  verbose: console.log,
});

const appStaticPath = "./public";
app.use(express.static(appStaticPath));
const appStaticPathForTemplateEngine = "./public-for-template-engine";
app.use(express.static(appStaticPathForTemplateEngine));

app.get("/card/:id", (req, res) => {
  //DB SQL SELECT
  const query = db.prepare(`SELECT * FROM cards WHERE id = ?`);
  const data = query.get(req.params.id);
  console.log(data);

  if (data) {
    res.render("pages/card", data);
  } else {
    res.render("pages/card-not-found");
  }
});

const cards = [];

app.post("/card", (req, res) => {
  req.body.palette = req.body.palette || 1;

  if (req.body.name === "") {
    res.json({
      success: false,
      error: `Mandatory fields: name`,
    });
  } else if (req.body.job === "") {
    res.json({
      success: false,
      error: `Mandatory fields: job`,
    });
  } else if (req.body.email === "") {
    res.json({
      success: false,
      error: `Mandatory fields: email`,
    });
  } else if (req.body.phone === "") {
    res.json({
      success: false,
      error: `Mandatory fields: phone`,
    });
  } else if (req.body.linkedin === "") {
    res.json({
      success: false,
      error: `Mandatory fields: linkedin`,
    });
  } else if (req.body.github === "") {
    res.json({
      success: false,
      error: `Mandatory fields: github`,
    });
  } else if (req.body.photo === "") {
    res.json({
      success: false,
      error: `Mandatory fields:photo`,
    });
  } else {
    const userData = req.body;
    const cardId = `id-${cards.length}`;
    userData.id = cardId;
    // guardar los datos en cards
    // comprobar que todos los datos me los están enviando

    //cards.push(userData);
    //console.log(cards);

    //DB SQL INSERT
    const stmt = db.prepare(
      "INSERT INTO cards(name,job,photo,phone,email,linkedin,github,palette)VALUES(?,?,?,?,?,?,?,?)"
    );
    const result = stmt.run(
      req.body.name,
      req.body.job,
      req.body.photo,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.palette
    );

    const serverUrl =
      req.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://awesome-profile-cards-magician.herokuapp.com";

    res.json({
      success: true,
      cardURL: `${serverUrl}/card/${result.lastInsertRowid}`,
    });
  }
});
app.get("*", (req, res) => {
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
