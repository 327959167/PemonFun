// 导入art-template模板
const template = require( 'art-template' )

// 导入感悟集合规则表
const pet = require( '../model/pet' )

// 显示模板
module.exports = async( req, res ) => {
  //查询全部感悟数据
  let pets = await pet.find( )

  //   console.log( pets )

  const MyPet = template( 'home/articPic/pet', { pets: pets } )
  res.send( MyPet )
}
