// routes/comments.routes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post('/', authMiddleware, commentsController.createComment); // λκΈ μμ±


module.exports = router;
