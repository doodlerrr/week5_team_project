// controllers/posts.controller.js
const PostService = require('../services/posts.service');

class PostsController {
  postService = new PostService();


  createPost = async (req, res, next) => {
    const { title, content, image } = req.body;
    const { userId, nickname } = res.locals.user;
    const createPostData = await this.postService.createPost(
      userId, 
      nickname, 
      title, 
      content, 
      image
    );
    res.json({ data: createPostData });
  };


  getAllPosts = async (req, res, next) => {
    const posts = await this.postService.findAllPosts();
    res.json({ data: posts });
  };


  getOnePost = async (req, res, next) => {
    const { postId } = req.params;
    const post = await this.postService.findPostById(postId);
    res.json({ data: post });
  };


  updatePost = async (req, res, next) => {
    const { postId } = req.params;
    const { title, content, image } = req.body;
    const { userId } = res.locals.user;
    const userAccountId = await (await this.postService.findPostById(postId)).userAccountId;

    if ( userAccountId !== userId ) 
      return res.json({ message : "수정 권한이 없습니다."});

    const updatePost = await this.postService.updatePost(
      postId,
      title,
      content,
      image
    );

    res.json({ data : updatePost });
  };


  deletePost = async (req, res, next) => {
    const { postId } = req.params;
    const userAccountId = await (await this.postService.findPostById(postId)).userAccountId;
    const { userId } = res.locals.user;

    if (userAccountId !== userId )
      return res.json({ message : "삭제 권한이 없습니다"});

    await this.postService.deletePost(postId);
    res.json({ message : "게시글이 삭제되었습니다"});
  };


  likePost = async (req, res, next) => {
    const { postId } = req.params;
    await this.postService.likePost(postId);
    res.json({ message : "이 게시글을 좋아합니다" });
  };

}

module.exports = PostsController;