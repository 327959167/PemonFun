// 导入art-template模板
const template = require( 'art-template' )

// 导入感悟集合规则表
const felling = require( '../model/feeling' )

// 显示模板
module.exports = async( req, res ) => {
  //查询全部感悟数据
  let fell = await felling.find( )

  const Personal = template( '../html/home/articPic/feeling', { fell: fell } )
  res.send( Personal )
}
