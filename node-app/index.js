const express = require('express')
const app = express()
const port = 3000

app.set("trust proxy", true)

app.get('/', (req, res) => res.send({ ... req.headers, ip: req.ip}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))