const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var videoPosts = [
  {
    link: "https://www.youtube.com/embed/reGPK8HsNBY",
    title: "모든 역경을 근육으로 극복한 형 ㅋㅋㅋㅋㅋ",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/exCn38p8bGs",
    title: "펀치 노래 ",
    witer: "러럴러",
    numberOfComment: 123123,
    views: 444,
  },
  {
    link: "https://www.youtube.com/embed/OsRogAzmsF8",
    title: "빅마마 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/5ePKBm4spBg",
    title: "권진아 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/23dZ5Aazy0Y",
    title: "시아준수 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/reGPK8HsNBY",
    title: "모든 역경을 근육으로 극복한 형 ㅋㅋㅋㅋㅋ",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/exCn38p8bGs",
    title: "펀치 노래 ",
    witer: "러럴러",
    numberOfComment: 123123,
    views: 444,
  },
  {
    link: "https://www.youtube.com/embed/OsRogAzmsF8",
    title: "빅마마 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/5ePKBm4spBg",
    title: "권진아 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
  {
    link: "https://www.youtube.com/embed/23dZ5Aazy0Y",
    title: "시아준수 노래",
    witer: "러럴러",
    numberOfComment: 4,
    views: 3,
  },
];

app.use(cors());

app.get("/mediaActorVideos", (req, res) => {
  res.json(videoPosts);
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
