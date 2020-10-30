// 导入用户集合规则
const User = require( '../model/youlequUser' )

module.exports = async( req, res ) => {
  // 查找对应mongodb里面的用户
  let users = await User.findOne( { nickName: req.query.nickName } )

  // 将数据转化为json格式
  users = JSON.stringify( users, null, '\r' )

  // 转为前端可调用的数据
  users = eval( '(' + users + ')' )

  const email = users.email
  const nickName = users.nickName
  const HeadPortrait = users.HeadPortrait

  res.send( [ email, nickName, HeadPortrait ] )
}
