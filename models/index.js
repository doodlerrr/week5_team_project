'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Like = require('./like');


db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Comment = Comment;
db.Like = Like;


User.init(sequelize);
Post.init(sequelize);
Comment.init(sequelize);
Like.init(sequelize);


User.associate(db);
Post.associate(db);
Comment.associate(db);
Like.associate(db);


module.exports = db;


