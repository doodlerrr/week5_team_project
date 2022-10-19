// routes/comments.routes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const CommentsController = require('../controllers/posts.controller');
const commentsController = new CommentsController();

router.post('/');
