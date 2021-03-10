const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`The Backers App listening at port ${port}`);
});