// 导入art-template模板
const template = require( 'art-template' )

// 显示模板
module.exports = async( req, res ) => {
  const login = template( 'login/login', {} )
  res.send( login )
}
