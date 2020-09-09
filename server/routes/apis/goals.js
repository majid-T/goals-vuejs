const express = require("express");
const mongoDb = require("mongodb");
const config = require("config");

const dbUri = config.get("mongoURI");

const router = express.Router();

//Get Goals
router.get("/", async (req, res) => {
  const goals = await loadGoalsConnection();

  res.send(await goals.find({}).toArray());
});

//Add Goals

//Delete Goals

//Geting Our MongoDb
async function loadGoalsConnection() {
  const client = await mongoDb.MongoClient.connect(dbUri, {
    useNewUrlParser: true,
  });

  return client.db("devconnector").collection("goals");
}

module.exports = router;
