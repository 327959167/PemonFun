// 图文----影评

// 导入mongoose模块
const mongoose = require( 'mongoose' )

// 创建柚乐趣用户表集合规则
const FilmSchema = new mongoose.Schema( {
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
const film = mongoose.model( 'FilmCritics', FilmSchema )

//创建新闻网页内容
// film.create( {
//   HeadPortrait: '../../images/home/FilmCritics/img (11).jpg',
//   title: '神偷奶爸',
//   author: '清郢雪',
//   authorTxt: '神偷奶爸是治愈系动画片，非常适合全家一起看的动画片。里面格鲁想成为惊世骇俗的坏人，应该是因为寂寞吧？！童年母亲的影响太深，所以随时随地都想怒刷存在感…一直都知道小黄人，感觉萌萌哒！人人都渴望被证明存在，真正记得你的人一定会记得！。',
// } )

// 导出用户集合
module.exports = film
