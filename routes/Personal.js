// 导入art-template模板
const template = require( 'art-template' )

// 显示模板
module.exports = async( req, res ) => {
  const Personal = template( 'Personal_details/Personal_details', {} )
  res.send( Personal )
}
