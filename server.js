var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(jsonParser)

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('dist'))

app.post('/hey', function (req, res) {
  console.log(req.body)
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
