const { Double } = require( 'bson' )
  // 图文----funny_artic1

// 导入mongoose模块
const mongoose = require( 'mongoose' )

// 创建柚乐趣用户表集合规则
const ArticSchema = new mongoose.Schema( {
  picture: {
    type: String,
  },

  text: {
    type: String,
    minlength: 1,
  },

  watch: {
    type: String,
    minlength: 0,
  },

  comments: {
    type: String,
    minlength: 0,
  },
} )

// 创建用户表
const av_funny_artic1 = mongoose.model( 'av_funny_artic1', ArticSchema )

//创建新闻网页内容
// av_funny_artic1.create( {
//   picture: '../../images/av/artic/artic1/av_artic1_18.jpg',
//   text: '所以到底是个什么？',
//   watch: '628.1万',
//   comments: '1.2万',
// } )

// 导出用户集合
module.exports = av_funny_artic1
