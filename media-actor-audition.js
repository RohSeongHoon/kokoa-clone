const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

var posts = [
  {
    title: "오디션 정보를 알아옴",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "dfj",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "asdfa",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "134241",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "123123",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "오디션 정보를 알아옴",
    writer: "asdff",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "김아sdgasdg무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "aaaadf",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "sdffqf2",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "오디션 정보를 알아옴",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "논현에서 프로필을 돌렸어요 ",
    writer: "asdfasf",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남에서 프로필을 돌리는데 너무나도 힘드네여",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남 뭐시기 뭐시기 뭐시기",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
  {
    title: "강남",
    writer: "김아무게",
    numberOfComment: 21,
    views: 33,
  },
];

app.use(cors());
app.get("/categories/mediaAudition", (req, res) => {
  res.json(posts);
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
