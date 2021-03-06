const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var sidebar = [
  { category: "actor", categoryKr: "연기", categoryLink: "#" },
  { category: "musical", categoryKr: "뮤지컬", categoryLink: "#" },
  { category: "vocal", categoryKr: "보컬", categoryLink: "#" },
  { category: "performer", categoryKr: "연주자", categoryLink: "#" },
];
var categories = [
  {
    category: "actor",
    categoryKr: "연기",
    categoryLink: "../test/community/actor.html",
    contents: [
      { postLink: "#", postName: "actorVideo", postNameKr: "연기영상" },

      { postLink: "#", postName: "profileBox", postNameKr: "프로필함" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "freePost", postNameKr: "자유게시판" },
    ],
  },
  {
    category: "musical",
    categoryKr: "뮤지컬",
    categoryLink: "../test/community/musical.html",
    contents: [
      { postLink: "#", postName: "musicalVideo", postNameKr: "뮤지컬영상" },

      { postLink: "#", postName: "profileBox", postNameKr: "프로필함" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "freePost", postNameKr: "자유게시판" },
    ],
  },

  {
    category: "vocal",
    categoryKr: "보컬",
    categoryLink: "../test/community/vocal.html",
    contents: [
      { postLink: "#", postName: "vocalVideo", postNameKr: "보컬영상" },

      { postLink: "#", postName: "profileBox", postNameKr: "프로필함" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "freePost", postNameKr: "자유게시판" },
    ],
  },
  {
    category: "performer",
    categoryKr: "연주자",
    categoryLink: "../test/community/performer.html",
    contents: [
      { postLink: "#", postName: "performerVideo", postNameKr: "연주영상" },

      { postLink: "#", postName: "profileBox", postNameKr: "프로필함" },

      { postLink: "#", postName: "audition", postNameKr: "오디션정보" },

      { postLink: "#", postName: "freePost", postNameKr: "자유게시판" },
    ],
  },
];

var videos = {
  videos: [
    {
      videoTitle: "한이 쌓인 시간 -양준모 ",
      videoUrl: "https://www.youtube.com/embed/4hCrSrqPUcc",
      videoWriter: "김아무게",
    },
    {
      videoTitle: "빅마마 킬링벌스 ",
      videoUrl: "https://www.youtube.com/embed/OsRogAzmsF8",
      videoWriter: "아무무",
    },
    {
      videoTitle: "로니콜먼 근황 ",
      videoUrl: "https://www.youtube.com/embed/nUCMTI2HPg0",
      videoWriter: "로니",
    },
    {
      videoTitle: "마미손 킬링벌스 ",
      videoUrl: "https://www.youtube.com/embed/jLUa6brtC-c",
      videoWriter: "릴릴",
    },
  ],
};

var communities = {
  communities: [
    {
      link: "./community/actor.html",
      category: "actor",
      categoryKr: "배우",
      contents: [
        {
          postTitle: "배우는게 너무 느리고~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "냠냠",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "느리고~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "배우는게 너무ㅁ왕라라ㅏㄹ 느리고~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "너무 많아서 힘들어요~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "참으로 많다 정말 ~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/musical.html",
      category: "musical",
      categoryKr: "뮤지컬",
      contents: [
        {
          postTitle: "뮤지컬 재밋다~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: " 가짜 데이터 ~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "와랄랄ㄹ랄랄라라",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "나능루ㅜㅜ울",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "언제까지 어깨춤을 추게 할거야~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "바니바니~",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/vocal.html",
      category: "vocal",
      categoryKr: "보컬",
      contents: [
        {
          postTitle: "당근 당근",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "쭈꾸미",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "오징어",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "거미의 수컷은 크기가 작습니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "암컷 거미에게 잡아먹힐 가능성이 있기때문입니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "거미 징그렁",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },

    {
      link: "./community/performer.html",
      category: "performer",
      categoryKr: "연주자",
      contents: [
        {
          postTitle: "과거엔 인간과 소통한 돌고래가 있었습니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "그 돌고래는 인간에게 ",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "당신들은 무슨존재인가 라고 물어본적이있다고합니다",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "그 돌고래는 자살했습니다 ",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "너무 잔인하네요",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
        {
          postTitle: "돌고래 귀엽",
          commentCounts: 123,
          communityUrl: "https://www.youtube.com/watch?v=4hCrSrqPUcc",
        },
      ],
    },
  ],
};

app.use(cors());

app.get("/categories", (req, res) => {
  res.json(categories);
});
app.get("/sidebar", (req, res) => {
  res.json(sidebar);
});

app.get("/videos", (req, res) => {
  res.json(videos);
});

app.get("/posts", (req, res) => {
  res.json(communities);
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
