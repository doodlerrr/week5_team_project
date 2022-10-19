// services/posts.services.js
const PostRepository = require('../repositories/posts.repository');

class PostService {
  postRepository = new PostRepository();


  createPost = async ( userAccountId, nickname, title, content, image ) => {
    const createPostData = await this.postRepository.createPost(
      userAccountId,
      nickname,
      title,
      content,
      image
    );

    return {
      postId         : createPostData.postId,
      title          : createPostData.title,
      content        : createPostData.content,
      image          : createPostData.image,
      createdAt      : createPostData.createdAt,
      updatedAt      : createPostData.updatedAt,
      userAccountId  : createPostData.userAccountId,
      nickname       : createPostData.nickname
    };
  };


  findAllPosts = async () => {
    const allPosts = await this.postRepository.findAllPosts();

    allPosts.sort((a,b) => {
        return b.createdAt - a.createdAt;
    });

    return allPosts.map((post) => {
        return {
            postId         : post.postId,
            title          : post.title,
            content        : post.content,
            image          : post.image,
            createdAt      : post.createdAt,
            updatedAt      : post.updatedAt,
            userAccountId  : post.userAccountId,
            nickname       : post.nickname
        };
    });
  };


  findPostById = async (postId) => {
    const findPost = await this.postRepository.findOnePost(postId);
    return {
      postId         : findPost.postId,
      title          : findPost.title,
      content        : findPost.content,
      image          : findPost.image,
      createdAt      : findPost.createdAt,
      updatedAt      : findPost.updatedAt,
      userAccountId  : findPost.userAccountId,
      nickname       : findPost.nickname
    }
  };


  updatePost = async ( postId, title, content, image ) => {
    const findPost = await this.postRepository.findOnePost( postId );

    if (!findPost) 
      throw new Error("게시물을 찾을 수 없습니다");

    await this.postRepository.updatePost(
      postId, 
      title, 
      content, 
      image
    );

    const updatePost = await this.postRepository.findOnePost(postId);

    return {
      postId        : updatePost.postId,
      title         : updatePost.title,
      content       : updatePost.content,
      image         : updatePost.image,
      createdAt     : updatePost.createdAt,
      updatedAt     : updatePost.updatedAt,
      userAccountId : updatePost.userAccountId,
      nickname      : updatePost.nickname
    }
  };


  deletePost = async (postId) => {
    const findPost = await this.postRepository.findOnePost( postId );

    if ( !findPost ) 
      throw new Error("삭제할 게시글이 없습니다.");

    await this.postRepository.deletePost(postId);
    return { message : "삭제되었습니다."};

  };
  
  
  likePost = async (postId) => {
    const findPost = await this.postRepository.findOnePost(postId);

    if (!findPost) 
      throw new Error("좋아요할 게시글이 없습니다.");

    await this.postRepository.likePost(postId);
    return { message : "좋아요" };
  };

}

module.exports = PostService;