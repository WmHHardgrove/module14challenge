const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const { belongsTo } = require('./User');


Post.belongsTo(User,{
    foreignKey: 'user_id'
});

Comment.belongsTo(User,{
    foreignKey: 'user_id'
});

Post.hasMany(Comment,{
    foreignKey: 'post_id'
});



module.exports = { User, Post, Comment };
