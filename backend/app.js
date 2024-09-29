require("dotenv").config();
const express = require('express');

const app = express();
var port = process.env.PORT || 3000; // 如果沒設定就用3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})