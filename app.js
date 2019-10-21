const express = require('express')
const app = express()
const port = 3000


app.use('/img',express.static('img'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.get('/fact', function (req, res) {
    res.send('Mathias er som minimun 100 gange sejere end Cosby The Gay Man')
  })

  app.get('/cosby', function (req, res) {
    res.send('Der var engang hvor Nicklas kiggede på Cosby og sagde "Mere gay kan man ikke være"')
  })


  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })