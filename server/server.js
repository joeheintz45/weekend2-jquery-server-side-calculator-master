let express = require('express');
let bodyParser = require('body-parser');
const mathValue = require('./modules/calculator');
let app = express();

const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculator', (req, res) => {
  equation = req.body;
  mathValue(1, 2, '+');
  res.sendStatus(200);
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
