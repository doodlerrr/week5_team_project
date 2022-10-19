const Sequelize = require('sequelize');

module.exports = class Like extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            likeId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                required: true,
                autoIncrement: true
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Like',
            tableName: 'likes',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Like.belongsTo( db.User, { foreignKey: 'userId', targetKey: 'userId' });
        db.Like.belongsTo( db.Post, { foreignKey: 'postId', targetKey: 'postId' });
    }
};