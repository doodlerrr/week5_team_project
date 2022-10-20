// app.js
const dotenv = require("dotenv");
const express = require('express');
const router = require('./routes'); // 라우터 연결

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', router); // 상위 라우터


app.listen(4000, () => {
  console.log(4000, '포트로 서버가 열렸습니다');
});
