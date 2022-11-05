import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const serverUsers = []
const tweets = [
    {
		username: "bobesponja",
			avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		  tweet: "eu amo o hub"
	}
]

app.post("/sign-up", (req, res) => {
    const { username, avatar} = req.body
    if ( !username || !avatar ) {
        return res.sendStatus(400)
    }
    const newUser = {
        username,
        avatar
    }
    serverUsers.push(newUser)
    res.sendStatus(200)
    console.log(serverUsers)
})

app.post("/tweets", (req, res) => {
    const { username, tweet} = req.body
    if ( !username || !tweet ) {
        return res.sendStatus(400)
    }
    const newTweet = {
        username,
        tweet
    }
    tweets.push(newTweet)
    res.sendStatus(200)
    console.log(serverUsers)
})

app.listen(5000, ()=> console.log("App running in port 5000"))