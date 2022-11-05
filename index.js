import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const serverUsers = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
  {
    username: "patrick",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeDUfU8hmDAQ3J0Gy3MjH8EuV2KnMPtUZa_w5Xi3Z&s",
  },
  {
    username: "lulamolusco",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-L9LUIDfFC5s-CqoCmJSX1f_4odS98OQfSo-aPBHNg&s",
  },
  {
    username: "sandy",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMis2ge7sHbhtKVgyORvHKhMeRLX5m-KHslyNc6cQJ&s",
  },
  {
    username: "SrSiriguejo",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5WvzHWFKygfPZ-3lCXwsDBxAZIAz25Xjz8XPXgJPYA&s",
  },
  {
    username: "gary",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmv8at5UQr2thKwZA9dA-3w7JDI6nH77SvjZOIAjYUw&s",
  },
  {
    username: "narutin",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_K5iZpnampYibv55M4Lg9_8kRASxul_cAHot4Ng2ZQ&s",
  },
  {
    username: "sasuke",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpivAkluU-buPwP0j4rEUOj5AvyKFQk5JrBSYyp12aPQ&s",
  },
  {
    username: "sakura",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQvA1pKCBC-yQUqnHBaXxskaVySBFcJD9blUS_PPu&s",
  },
  {
    username: "Hinata",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V7jmlVNyv6n69MxYlZ64evuBmY2HLsrjOLnxzVIR&s",
  }
];
const tweets = [
  {
    username: "bobesponja",
    avatar:
      "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    tweet: "eu amo o hub",
  },
  {
    username: "patrick",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeDUfU8hmDAQ3J0Gy3MjH8EuV2KnMPtUZa_w5Xi3Z&s",
    tweet: "eu amo a vida",
  },
  {
    username: "lulamolusco",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-L9LUIDfFC5s-CqoCmJSX1f_4odS98OQfSo-aPBHNg&s",
    tweet: "eu amo o mundo",
  },
  {
    username: "sandy",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMis2ge7sHbhtKVgyORvHKhMeRLX5m-KHslyNc6cQJ&s",
    tweet: "eu amo o back-end",
  },
  {
    username: "SrSiriguejo",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5WvzHWFKygfPZ-3lCXwsDBxAZIAz25Xjz8XPXgJPYA&s",
    tweet: "eu amo o sol",
  },
  {
    username: "gary",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmv8at5UQr2thKwZA9dA-3w7JDI6nH77SvjZOIAjYUw&s",
    tweet: "eu amo codar",
  },
  {
    username: "narutin",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_K5iZpnampYibv55M4Lg9_8kRASxul_cAHot4Ng2ZQ&s",
    tweet: "eu amo o acordar",
  },
  {
    username: "sasuke",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpivAkluU-buPwP0j4rEUOj5AvyKFQk5JrBSYyp12aPQ&s",
    tweet: "eu amo o amanhecer",
  },
  {
    username: "sakura",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQvA1pKCBC-yQUqnHBaXxskaVySBFcJD9blUS_PPu&s",
    tweet: "eu amo curar",
  },
  {
    username: "Hinata",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V7jmlVNyv6n69MxYlZ64evuBmY2HLsrjOLnxzVIR&s",
    tweet: "eu amo o naruto",
  },
];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    return res.sendStatus(400);
  }
  const newUser = {
    username,
    avatar,
  };
  serverUsers.push(newUser);
  res.sendStatus(200);
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  if (!username || !tweet) {
    return res.sendStatus(400);
  }
  const newTweet = {
    username,
    tweet,
  };
  tweets.push(newTweet);
  res.sendStatus(200);
});

app.get("/tweets", (req, res) => {
  const data = [];
  for (let i = tweets.length - 1; i > tweets.length - 11; i--) {
    const gettingAvatar = serverUsers.find(
      (user) => user.username === tweets[i].username
    );
    const newData = {
      avatar: gettingAvatar.avatar,
      username: tweets[i].username,
      tweet: tweets[i].tweet,
    };
    data.push(newData);
  }
  res.send(data);
});

app.listen(5000, () => console.log("App running in port 5000"));
