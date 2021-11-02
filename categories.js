const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var actorCategory = [
  { category: "actor" },
  { categoryKr: "배우" },
  { link: "../test/community/actor.html" },
  {
    contents: [
      { videoPosts: "./community/actor-post-main.html" },
      { profileBox: "#" },
      { auditionPosts: "#" },
      { freePosts: "#" },
    ],
  },
];
var musicalCategory = [];
var vocalCategory = [];
var performerCategory = [];

app.use(cors());

app.get("/actorCategory", (req, res) => {
  res.json(actorCategory);
});
app.get("/musicalCategory", (req, res) => {
  res.json(musicalCategory);
});
app.get("/vocalCategory", (req, res) => {
  res.json(vocalCategory);
});

app.get("/performerCategory", (req, res) => {
  res.json(performerCategory);
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
