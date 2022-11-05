import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const serverUsers = []
const tweets = []

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
    res.status(200).send("Ok!")
    console.log(serverUsers)
})



app.listen(5000, ()=> console.log("App running in port 5000"))