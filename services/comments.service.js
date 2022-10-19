// /services/comments.service.js
const CommentsRepository = require('../repositories/comments.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    createComment = async ( comment, commenter ) => {
        const createCommentData = await this.commentsRepository.createComment(
            comment,
            commenter
        );
        return {
            commentId : createCommentData.commentId,
            comment   : createCommentData.comment,
            commenter : createCommentData.commenter,
            postId : createCommentData.postId
        }
    }
}

module.exports = CommentsService;