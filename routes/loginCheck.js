// 导入用户集合模块
const User = require( '../model/youlequUser' )

// 对密码进行加密
const bcrypt = require( 'bcrypt' )

// 显示模板
module.exports = async( req, res ) => {
  // 查询用户输入邮箱是否存在
  const user = await User.findOne( { email: req.body.email } )
    // 判断用户是否存在，并反馈给前端
  if ( !user ) {
    res.send( '用户不存在，请先注册账户！' )
    return false
  }
  // 将数据库密码进行解密
  const isPasswordValid = bcrypt.compareSync( req.body.password, user.password )
  if ( !isPasswordValid ) {
    res.send( '邮箱或密码错误！' )
  } else {
    // 验证通过
    const flag = '1'
    const email = req.body.email
    const nickName = user.nickName
    const HeadPortrait = user.HeadPortrait
    res.send( [ flag, email, nickName, HeadPortrait ] )
  }
}
