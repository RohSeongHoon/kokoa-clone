const express = require("express");
const app = express();
const port = 3000;

var body = {
  videos: [
    {
      videoTitle: "String",
      videoExplanation: "String",
    },
  ],

  communities: [
    {
      communityCategory: "배우",
      contents: [
        {
          postTitle: "이정재의 전성기-암흑기-부활",
          postWriter: "노성훈",
          postCategory: "배우",
          postContent: "와랄랄랄라",
          postVideo: "http://youtube.com/a/1245",
          commentCounts: 123,
        },
      ],
    },
    {
      communityCategory: "뮤지컬",
      contents: [
        {
          postTitle: "String",
          postWriter: "String",
          postCategory: "String",
          postContent: "String",
          postVideo: "url",
          postComment: "String",
        },
      ],
    },
  ],
  signUp: {
    id: "String",
    password: "String",
    checkPassword: "String",
    gender: "String",
    name: "String",
    nickName: "String",
    email: "String",
    aboutMe: "String",
    aboutMeImg: "img",
    aboutMeVideo: "video",
  },
  login: {
    id: "String",
    password: "String",
  },
};

// for (community in body.communities) {
//     ${}.setText(community.postTitle);
// }

// app.get("/aaaaa", (req, res) => {
//   res.json(body);
// });

// app.listen(port, () => {
//   console.log(`Example app listen at http://localhost:${port}`);
// });
