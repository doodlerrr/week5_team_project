const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            commentId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                required: true,
            },
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Comment.belongsTo( db.User, { foreignKey: 'commenter', targetKey: 'userId' });
        db.Comment.belongsTo( db.Post, { foreignKey: 'postId', targetKey: 'postId' });
    }
};