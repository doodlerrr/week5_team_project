// repositories/posts.repository.js
const { Post, Like } = require('../models');

class PostRepository {

  createPost = async ( userAccountId, nickname, title, content, image ) => {
    const createPostData = await Post.create({
      userAccountId,
      nickname,
      title,
      content,
      image
    });
    return createPostData;
  };

  findAllPosts = async () => {
    const posts = await Post.findAll();
    return posts;
  };

  findOnePost = async ( postId ) => {
    const post = await Post.findByPk( postId );
    return post;
  }

  updatePost = async ( postId, title, content, image ) => {
    const updatePostData = await Post.update(
      { title, content, image },
      { where: { postId } }
    );
    return updatePostData;
  };

  deletePost = async ( postId ) => {
    const deletePostData = await Post.destroy({ where: { postId }});
    return deletePostData;
  }

  // 이 게시글 좋아요 업데이트 기능
  likePost = async ( postId ) => {
    const likePostData = await Like.create({ postId });
    return likePostData;
  }

}

module.exports = PostRepository;