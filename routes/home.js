// 导入art-template模板
const template = require( 'art-template' )
  // 导入用户模块
const User = require( '../model/youlequUser' )
  // 导入url模块
const url = require( 'url' )

// 显示模板
module.exports = async( req, res ) => {
  // // 路径
  // const { query } = url.parse( req.url, true )

  // // 获取路径参数
  // let users = await User.findOne( { email: query.email } )

  // // 转化为json对象
  // users = JSON.stringify( users, null, '\r' )

  // // 超级重要的一步，格式看清楚了，王龙金小垃圾
  // users = eval( '(' + users + ')' )

  // 展示模板
  const home = template( 'home/home', {} )
  res.send( home )
}
