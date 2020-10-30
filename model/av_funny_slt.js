// 影音----funny缩略图

// 导入mongoose模块
const mongoose = require( 'mongoose' )

// 创建柚乐趣用户表集合规则
const AFSSchema = new mongoose.Schema( {
  // 图片
  picture: {
    type: String,
  },
  // 标题
  text: {
    type: String,
    minlength: 1,
    maxlength: 30,
  },
} )

// 创建用户表
const av_funny_slt = mongoose.model( 'av_funny_slt', AFSSchema )

//funny缩略图内容
// av_funny_slt.create( {
//   picture: '../../images/av/suoluetu/funny (2).webp',
//   text: '给1890件国宝搬家有多麻烦？每张纸都得编号！',
// } )

// 导出用户集合
module.exports = av_funny_slt
