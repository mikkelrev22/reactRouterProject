const express = require('express')
const app = express()
const PORT = 3333


app.use(express.static(__dirname + '/../client/dist'))

app.use((err, req, res, next)=>{
  res.send(404)
})

app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).send(err.stack)
})

app.listen(port, ()=>{
  console.log(`Server is now listening on Port ${PORT}`)
})