const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                required: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            nickname: {
                type: Sequelize.STRING(10),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING(30),
                allowNull: false
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.User.hasMany( db.Comment, { foreignKey: 'commenter', sourceKey: 'userId'} );
        db.User.hasMany( db.Post, { foreignKey: 'userAccountId', sourceKey: 'userId'} );
        db.User.hasMany( db.Like, { foreignKey: 'userId', sourceKey: 'userId'} );
        db.User.hasMany( db.Post, { foreignKey: 'nickname', sourceKey: 'nickname'} );
    }
};