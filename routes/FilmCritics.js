// 导入art-template模板
const template = require( 'art-template' )

// 导入感悟集合规则表
const Film = require( '../model/FilmCritics' )

// 显示模板
module.exports = async( req, res ) => {
  //查询全部感悟数据
  let Films = await Film.find( )

  const MyFilms = template( 'home/articPic/FilmCritics', { Films: Films } )
  res.send( MyFilms )
}
