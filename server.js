const express = require('express')
const path = require('path')
const Sentiment = require('sentiment')

const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/Suicide%20Analysis.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'Suicide Analysis.html'))
})

app.get('/About.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'About.html'))
})

app.get('/speech%20to%20text.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'speech%20to%20text.html'))
})

app.get('/depression_test.html.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'depression_test.html'))
})

app.get('/Helpline.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'Helpline.html'))
})

app.get('/emotion', function(req, res) {
  const sentiment = new Sentiment()
  const text = req.query.text
  const score = sentiment.analyze(text)

  res.send(score)
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})
