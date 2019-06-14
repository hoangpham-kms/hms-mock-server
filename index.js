const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const fs = require('fs')
const API = require('./public.api');
API.forEach( api =>
  app[api.method](api.url, (request, response) => {
    const fileContent = fs.readFileSync(api.result)
    response.statusCode = api.statusCode
    response.send(fileContent)
  })
)

app.get('/', (req, res) => {
  API.forEach( api => res.write(`METHOD=${api.method}\t${req.protocol}://${req.get('host')}${api.url}\n\n`))
  res.end()
})
