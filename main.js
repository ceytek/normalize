const express = require("express");
const bodyParser = require("body-parser");
const incorrectWords = require("./normalize.json");
const app = express();
app.use(bodyParser.json());

app.post("/check", (req, res) => {
    const input = req.body.sentence;
    let output = input;
    for (const [incorrect, correct] of Object.entries(incorrectWords)) {
      output = output.replace(new RegExp(incorrect, "gi"), correct);
    }
    res.send({ correctedSentence: output });
  });
  
  app.listen(3001, () => {
    console.log("Server is listening on port 3001");
  });
  