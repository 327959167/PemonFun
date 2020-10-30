// 图文----感悟

// 导入mongoose模块
const mongoose = require( 'mongoose' )

// 创建柚乐趣用户表集合规则
const feeling = new mongoose.Schema( {
  // 图片
  HeadPortrait: {
    type: String,
  },
  // 标题
  title: {
    type: String,
    minlength: 1,
    maxlength: 40,
  },
  // 文本内容
  text: {
    type: String,
    minlength: 15,
  },
  logo: {
    type: String,
    maxlength: 12,
  },
  vedio: {
    type: String,
    maxlength: 12,
  },
} )

// 创建用户表
const Feeling = mongoose.model( 'feeling', feeling )

//创建新闻网页内容
// Feeling.create( {
// HeadPortrait : '../../../images/home/felling/new (7).jpg';
//   title: '大陆出动大批船只“围岛”？台当局吓坏，紧急派舰艇“驱离”',
//   text: '10月25日是台湾光复75周年，台媒炒作今日一早马祖南竿海面出现大批大陆抽砂船，仿若围岛，台湾“海巡署”为此派出新北舰与特勤队急驰援“驱离”。不过，马祖海巡队随后澄清称，这些抽砂船只是在线外水域经过。',
//   logo: '国际新闻官方账号',
//   vedio: '9999',
// } )

// 导出用户集合
module.exports = Feeling
