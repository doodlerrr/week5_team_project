// routes/comments.routes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-Middleware');

const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post('/', authMiddleware, commentsController.createComment); // 댓글 작성


module.exports = router;
