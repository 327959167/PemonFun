// 导入用户集合规则
const User = require( '../model/youlequUser' )

// 导入bcrypt加密模块
const bcrypt = require( 'bcrypt' )

module.exports = async( req, res ) => {
  // 头像名称  req.body.fileName
  // 修改数据库的名称为 HeadPortrait
  // 修改后的数据为 '../../images/UsersHead/' + req.body.fileName

  // 1.昵称 不为空      不为空              不为空              不为空
  // 2.密码 为空        不为空              为空                不为空
  // 3.头像 为空        为空                不为空              不为空
  // 4.结果 修改昵称     修改昵称、密码       修改昵称、头像      修改昵称、密码、头像

  // 获取用户输入的密码、
  const password = req.body.password
    // 生成盐-10位的随机数字
  const total = 10
  const salt = bcrypt.genSaltSync( total )
    // 利用hash开始加密
  const hash = bcrypt.hashSync( password, salt )

  if (
    req.body.password.trim( ).length == 0 &&
    req.body.fileName.trim( ).length == 0
  ) {
    await User.updateOne( { email: req.body.email }, { nickName: req.body.nickName } )
    res.send( '修改成功' )
    return false
  } else if (
    req.body.password.trim( ).length != 0 &&
    req.body.fileName.trim( ).length == 0
  ) {
    await User.updateOne( { email: req.body.email }, { nickName: req.body.nickName, password: hash } )
    res.send( '修改成功' )
    return false
  } else if (
    req.body.password.trim( ).length == 0 &&
    req.body.fileName.trim( ).length != 0
  ) {
    await User.updateOne( { email: req.body.email }, {
      nickName: req.body.nickName,
      HeadPortrait: '../../images/UsersHead/' + req.body.fileName,
    } )
    res.send( '修改成功' )
    return false
  } else if (
    req.body.password.trim( ).length != 0 &&
    req.body.fileName.trim( ).length != 0
  ) {
    await User.updateOne( { email: req.body.email }, {
      nickName: req.body.nickName,
      password: hash,
      HeadPortrait: '../../images/UsersHead/' + req.body.fileName,
    } )
    res.send( '修改成功' )
    return false
  } else {
    res.send( '1' )
  }
}
