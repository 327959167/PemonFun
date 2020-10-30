// 导入express模块，搭建网站服务器
const express = require( 'express' )
const app = express( )

// 导入path模块，用于绝对路径的书写
const path = require( 'path' )

// 获取POST数据
const bodyParser = require( 'body-parser' )
app.use( bodyParser.urlencoded( { extended: false } ) )

// 设置静态访问文件夹
app.use( express.static( path.join( __dirname, 'html' ) ) )
app.use( express.static( path.join( __dirname, 'images' ) ) )

// 设置art模板
const template = require( 'art-template' )
  // 配置默认路径
template.defaults.root = path.join( __dirname, './html' )
  // 配置默认后缀
template.defaults.extname = '.art'

// 解决跨域问题
const cors = require( 'cors' )
app.use( cors( ) )

// 数据库的连接
require( './model/connect' )
  //  图文
  // 感悟
  // const felling = require( './model/feeling' )
  // 影评
  // const FilmCritics = require( './model/FilmCritics' )
  // 萌宠
  // const pet = require( './model/pet' )

// 影音
// funny缩略图
// const av_funny_slt = require( './model/av_funny_slt' )
// funny_artic1
// const av_funny_slt = require( './model/av_funny_artic1' )

// 登录页面
// 跳转登录页面
app.use( '/login', require( './routes/login' ) )
  // 登录检查
app.post( '/loginCheck', require( './routes/loginCheck' ) )

// 导航---图文页面跳转
app.get( '/graphic', require( './routes/home' ) )

// 导航---影音页面跳转
app.get( '/av', require( './routes/av' ) )

// 导航---其他页面跳转
app.get( '/other', require( './routes/other' ) )

// 注册功能的实现
// 头像的上传--二进制文件
// 处理文件上传的模块
// const multer = require( 'multer' )
// 文件上传的路径
// const upload = multer( {
//   dest: './static/upload',
// } )
// app.use( upload.any( ) )

//  原样上传
const multer = require( 'multer' ) //multer插件
var storage = multer.diskStorage( {
  destination: function( req, file, cb ) {
    cb( null, './html/images/UsersHead/' )
      //文件保存路径
  },
  filename: function( req, file, cb ) {
    // console.log( file.originalname )
    cb( null, file.originalname )
      //存储文件名
  },
} )
var upload = multer( { storage: storage } )
  // 注册功能的实现
app.post( '/UserHead', upload.single( 'file' ), require( './routes/UserHead' ) )
app.post( '/register', require( './routes/register' ) )

// 个人信息的展示与修改
app.get( '/Personal_details', require( './routes/Personal_details' ) )
  // 个人信息页面的跳转
app.get( '/Personal', require( './routes/Personal' ) )
  // 个人信息的修改
app.post( '/update', require( './routes/update' ) )

// 主页面--感悟页面的跳转（felling）
app.get( '/feeling', require( './routes/feeling' ) )
  // 主页面--萌宠页面的跳转（pet）
app.get( '/pet', require( './routes/pet' ) )
  // 主页面--影评页面的跳转（pet）
app.get( '/FilmCritics', require( './routes/FilmCritics' ) )

// 影音页面-funny
app.get( '/funny', require( './routes/funny' ) )

// 监听3000端口
app.listen( 3000 )
console.log( '服务器搭建成功，请访问3000端口' )
