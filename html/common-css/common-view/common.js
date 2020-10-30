var nickName = sessionStorage.getItem( 'nickName' )
var HeadPortrait = sessionStorage.getItem( 'HeadPortrait' )

// 设置登录用户的昵称与头像
document.querySelector( '#nickName' ).innerHTML = nickName
$( '#HeadPortrait' ).attr( 'src', HeadPortrait )

// 跳转个人详情页时带去邮箱与昵称与头像
function update( ) {
  $.ajax( {
    type: 'get',
    url: '/Personal_details',
    data: {
      nickName: nickName,
    },
    success: function( reponText ) {
      location = '/Personal'
      sessionStorage.setItem( 'email', reponText[ 0 ] )
      sessionStorage.setItem( 'nickName', reponText[ 1 ] )
      sessionStorage.setItem( 'HeadPortrait', reponText[ 2 ] )
    },
  } )
}

// 退出前销毁session
function loginout( ) {
  sessionStorage.removeItem( 'email' )
  sessionStorage.removeItem( 'nickName' )
  sessionStorage.removeItem( 'HeadPortrait' )
  sessionStorage.removeItem( 'loginFlag' )
  window.location = '/login'
}
