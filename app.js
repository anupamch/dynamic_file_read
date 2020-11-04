const app = require('express')();
const http = require('http').createServer(app);
const router = require('./routes/index')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false}));
app.use(router)
const port = process.env.PORT || 8000



http.listen(port, () => {
  console.log(`listening on *:${port}`);
});