// controllers/posts.controller.js
const PostService = require('../services/posts.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

class PostsController {
  postService = new PostService();


  createPost = async (req, res, next) => {
    try {
      const { title, content, image } = req.body;
      const { userId, nickname } = res.locals.user;

      if ( !title || ! content || !userId || !nickname ) {
        throw new InvalidParamsError();
      }

      const createPostData = await this.postService.createPost(
        userId, 
        nickname, 
        title, 
        content, 
        image
      );

      res.json({ data: createPostData });

    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };


  getAllPosts = async (req, res, next) => {
    try { 
      const posts = await this.postService.findAllPosts();

      res.json({ data: posts });

    } catch (error) {
      console.log(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message});
    }
  };


  getOnePost = async (req, res, next) => {
    try {
      const { postId } = req.params;

      if ( !postId ) {
        throw new InvalidParamsError();
      }

      const post = await this.postService.findPostById(postId);

      res.json({ data: post });

    } catch (error) {
      console.log(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message});
    }
  };


  updatePost = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { title, content, image } = req.body;
      const { userId } = res.locals.user;

      if ( !postId || ! title || !content || !userId ) {
        throw new InvalidParamsError();
      }

      const userAccountId = await ( await this.postService.findPostById(postId)).userAccountId;
      
      if ( userAccountId !== userId ) {
        return res.json({ message : "수정 권한이 없습니다."});
      }

      const updatePost = await this.postService.updatePost(
        postId,
        title,
        content,
        image
      );

      res.json({ data : updatePost });

    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });

    }
  };


  deletePost = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const { userId } = res.locals.user;

      if ( !postId || !userId ) {
        throw new InvalidParamsError();
      }

      const userAccountId = await (await this.postService.findPostById(postId)).userAccountId;

      if (userAccountId !== userId ) {
        return res.json({ message : "삭제 권한이 없습니다"});
      }

      await this.postService.deletePost(postId);

      res.json({ message : "게시글이 삭제되었습니다"});

    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };


  likePost = async (req, res, next) => {
    try {

      const { postId } = req.params;

      await this.postService.likePost(postId);

      res.json({ message : "이 게시글을 좋아합니다" });

    } catch (error) {
      console.error(error);
      res.status(error.status || 400);
      res.json({ errorMessage: error.message });
    }
  };

}

module.exports = PostsController;