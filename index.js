require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

let tweets = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.post('/tweet', (req, res) => {
  tweets.push(req.body.tweet)
  res.redirect('/')
})

app.get('/tweets', (req, res) => {
  res.send(tweets);
})

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))