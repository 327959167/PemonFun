// 导入art-template模板
const template = require( 'art-template' )

// 显示模板
module.exports = async( req, res ) => {
  const other = template( 'home/other', {} )
  res.send( other )
}
