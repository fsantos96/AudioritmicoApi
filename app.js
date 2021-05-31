const express = require('express');
const router = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3600; 

router.use(bodyParser.json());

router.get('/', function(req, res) {
  res.status(200).send("Bienvenido")
});

require('./routes/configuration')(router);

router.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`);
});