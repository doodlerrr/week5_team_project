// controllers/comments.controller.js
const CommentsService = require('../services/comments.service');

class CommentsController {
    commentsService = new CommentsService();

    createComment = async (req, res, next) => {
        const { comment } = req.body;
        const { userId } = res.locals.user;
        const commenter = userId;
        const createCommentData = await this.commentsService.createComment(
            comment,
            commenter
        );
        res.json({ data: createCommentData });
    };
}

module.exports = CommentsController;