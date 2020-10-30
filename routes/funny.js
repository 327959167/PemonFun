// 导入art-template模板
const template = require( 'art-template' )

// 导入感悟集合规则表
const slt = require( '../model/av_funny_slt' )
const artic = require( '../model/av_funny_artic1' )

// 显示模板
module.exports = async( req, res ) => {
  //查询全部感悟数据
  let slts = await slt.find( )
  let artics = await artic.find( )

  //   console.log( slts )

  //   console.log( pets )

  const art = template( 'home/av/funny', { slts: slts, artics: artics } )
  res.send( art )
}
