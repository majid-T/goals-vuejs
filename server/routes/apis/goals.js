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
router.post("/", async (req, res) => {
  const goals = await loadGoalsConnection();

  await goals.insertOne({
    goal: req.body.goal,
    createdAt: new Date(),
  });

  res.status(201).send();
});

//Delete Goals
router.delete("/:id", async (req, res) => {
  const goals = await loadGoalsConnection();

  await goals.deleteOne({
    _id: new mongoDb.ObjectID(req.params.id),
  });

  res.status(200).send();
});

//Geting Our MongoDb
async function loadGoalsConnection() {
  const client = await mongoDb.MongoClient.connect(dbUri, {
    useNewUrlParser: true,
  });

  return client.db("vueGoals").collection("goals");
}

module.exports = router;
