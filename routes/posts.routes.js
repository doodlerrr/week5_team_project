// routes/posts.routes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

router.post('/', authMiddleware, postsController.createPost);                   // 글 쓰기
router.get('/', postsController.getAllPosts);                                   // 글 전체 조회 
router.get('/:postId', authMiddleware, postsController.getOnePost);             // 글 상세 조회
router.put('/:postId', authMiddleware, postsController.updatePost);             // 글 수정
router.delete('/:postId', authMiddleware, postsController.deletePost);          // 글 삭제
router.post('/:postId/like', postsController.likePost);                         // 글 좋아요


module.exports = router;