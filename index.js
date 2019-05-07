const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./routes/routes')(app);


//Starting app
app.listen(2001, err => {
  if (err) {
    return console.log(`Error While Starting app Error :: ${err}`);
  }
  console.log(`server is listening on 2001`);
});
