const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080
let mongoServiceRuning = false

// fix depreciation warning.
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

// connect to mongodb
mongoose.connect('mongodb://mongo:27017/docker-node-mongo-app', function (err) {
  console.log('mongodb connected ?', err ? false : true);
  mongoServiceRuning = err ? false : true 
});


app.get('/', (req, res) => {
  res.send(`Node application containerised using docker that is ${mongoServiceRuning ? 'successfully connected to mongoDB' : 'unable to connect to mongoDB.'}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
