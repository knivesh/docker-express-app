const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>A quick brown fox jumped over the lazy dog!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
