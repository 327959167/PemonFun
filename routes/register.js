// 导入用户集合规则
const User = require( '../model/youlequUser' )

module.exports = ( req, res, next ) => {
  // console.log( req.body.fileName )
  // console.log( req.body.nickname )
  // console.log( req.body.email )
  // console.log( req.body.password )
  // console.log( '../../images/UsersHead/' + req.body.fileName )

  // 新用户的注册
  User.create( {
    nickName: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    HeadPortrait: '../../images/UsersHead/' + req.body.fileName,
  } )
  res.send( true )
}
