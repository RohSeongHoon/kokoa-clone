const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var categories = [
  {
    actorCategories: [
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
    ],
  },
  {
    musicalCategory: [
      { category: "musical" },
      { categoryKr: "뮤지컬" },
      { link: "../test/community/musical.html" },
      {
        contents: [
          { videoPosts: "#" },
          { profileBox: "#" },
          { auditionPosts: "#" },
          { freePosts: "#" },
        ],
      },
    ],
  },
  {
    vocalCategory: [
      { category: "vocal" },
      { categoryKr: "보컬" },
      { link: "../test/community/vocal.html" },
      {
        contents: [
          { videoPosts: "#" },
          { auditionPosts: "#" },
          { freePosts: "#" },
        ],
      },
    ],
  },
  {
    performerCategory: [
      { category: "performer" },
      { categoryKr: "연주자 " },
      { link: "../test/community/performer.html" },
      {
        contents: [
          { videoPosts: "#" },
          { auditionPosts: "#" },
          { freePosts: "#" },
        ],
      },
    ],
  },
];

app.use(cors());

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
