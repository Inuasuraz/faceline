const express = require('express')
const line = require('@line/bot-sdk')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000
const user = 'U7eaf067d7c8fb144ebb051a70b870adf'

const config={
    channelAccessToken: "J7VV4tQfBFEJrn49SYi5IsPAtiQKAScGygDfKSPhCIqaqbWwmct/Nu8UTmZLumpTYhF2FAa/lQNxreMrNf91m2k14apzxQQb7uDqm9SWEDQmJxgc/X5bOyGBm6oBSra33m/2ZnrYWz3U7YLgdXJtVAdB04t89/1O/w1cDnyilFU=",
    channelSecret: "511ad0c8b81b9a3647704397a60fcc75"
}

const client = new line.Client(config)
app.use(cors())
app.use(bodyParser.json())

app.post('/',(req,res) =>{
    res.send("Hello world")
})

app.post('/user',(req,res) =>{
    console.log(req.body)

    const messageName ={
        type:'text',
        text:req.body.name
    };

    const messageEmail ={
        type:'text',
        text:req.body.email
    };

    const picture ={
        type: 'image',
        originalContentUrl: req.body.picture,
        previewImageUrl: req.body.picture
    };

    client.pushMessage(user, messageName)
    client.pushMessage(user, messageEmail)
    client.pushMessage(user, picture)

})

app.listen(port, () => console.log(`App running at port ${port}`))