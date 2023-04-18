const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Halo Dunia')
})

app.listen(port, () => {
  console.log(`Aplikasi berjalan pada port:${port}`)
})