// 图文----萌宠

// 导入mongoose模块
const mongoose = require( 'mongoose' )

// 创建柚乐趣用户表集合规则
const petSchema = new mongoose.Schema( {
  // 图片
  HeadPortrait: {
    type: String,
  },
  // 标题
  title: {
    type: String,
    minlength: 1,
    maxlength: 12,
  },
  // 作者名字
  author: {
    type: String,
    maxlength: 15,
  },
  // 宠物介绍
  authorTxt: {
    type: String,
    minlength: 12,
  },
} )

// 创建用户表
const pet = mongoose.model( 'pet', petSchema )

//创建新闻网页内容
// pet.create( {
//   HeadPortrait: '../../images/home/pet/img (17).jpg',
//   title: '害羞的猫咪',
//   author: '文巧',
//   authorTxt: '猫胆小，一看到陌生的人或动物就会很害怕，或者把他带出他待的那个空间他就会非常害怕。你要是见到怕人的小猫，不要先去摸他，先把手伸到他的鼻子下面让他闻闻你手上的味道，然后再去摸，这样它或许抓你的时候会轻点，手动滑稽。',
// } )

// 导出用户集合
module.exports = pet
