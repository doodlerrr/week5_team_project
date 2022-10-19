// /repositories/comments.repository.js

const { Comment } = require('../models');

class CommentsRepository {

    createComment = async ( commentId, comment, commenter ) => {
        const createCommentData = await Comment.create({
            commentId,
            comment,
            commenter
        });
        return createCommentData;
    };

}

module.exports = CommentsRepository;