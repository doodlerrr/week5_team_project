const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            postId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                required: true,
                autoIncrement: true
            },
            title: {
                type: Sequelize.STRING(30),
                allowNull: false
            },
            content: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            image: {
                type: Sequelize.STRING(200),
                allowNull: true
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Post.belongsTo( db.User, { foreignKey: 'userAccountId', targetKey: 'userId' });
        db.Post.belongsTo( db.User, { foreignKey: 'nickname', targetKey: 'nickname' });
        db.Post.hasMany( db.Comment, { foreignKey: 'postId', sourceKey: 'postId'} );
        db.Post.hasMany( db.Like, { foreignKey: 'postId', sourceKey: 'postId'} );
    }
};