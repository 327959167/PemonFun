// 导入mongoose模块
const mongoose = require( 'mongoose' )
  // 对密码进行加密
const bcrypt = require( 'bcrypt' )

// 创建柚乐趣用户表集合规则
const UserSchema = new mongoose.Schema( {
  // 昵称
  nickName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  // 邮箱
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  // 密码
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  // 头像
  HeadPortrait: {
    type: String,
  },
} )

// 根据邮箱和密码判断用户存在与否，存在即对其密码进行加密
UserSchema.static.authenticate = function( Email, password, callback ) {
  // 查找邮箱
  User.findOne( { Email: Email } ).exec( function( error, user ) {
    if ( error ) {
      return callback( error )
    } else if ( !user ) {
      var err = new Error( '用户不存在' )
      err.status = 401
      return callback( err )
    }
    // 用户存在，加密密码
    bcrypt.compare( password, user.password, function( error, result ) {
      if ( result == true ) {
        return callback( null, user )
      } else {
        return callback( )
      }
    } )
  } )
}
UserSchema.pre( 'save', function( next ) {
  var user = this
  bcrypt.hash( user.password, 10, function( err, hash ) {
    if ( err ) {
      return next( )
    }
    user.password = hash
    next( )
  } )
} )

// 创建用户表
const User = mongoose.model( 'User', UserSchema )

//创建用户
// User.create( {
//   nickName: '清风徐徐',
//   email: '327959167@qq.com',
//   password: '123456',
// } )

// 导出用户集合
module.exports = User
