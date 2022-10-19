// routes/index.js
const express = require('express');
const router = express.Router();

const usersRouter = require('./users.routes'); // 회원가입, 로그인
const postsRouter = require('./posts.routes'); // 포스트,좋아요

router.use('/users', usersRouter); // 회원가입, 로그인
router.use('/posts', postsRouter); // 포스트, 좋아요

module.exports = router;