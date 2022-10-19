// app.js
const dotenv = require("dotenv");
const express = require('express');
const { sequelize } = require('./models');
sequelize.sync({force:false}); // force : true면 강제로 테이블 지우고 재생성

const router = require('./routes'); // 라우터 연결

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', router); // 상위 라우터


app.listen(4000, () => {
  console.log(5000, '포트로 서버가 열렸습니다');
});
