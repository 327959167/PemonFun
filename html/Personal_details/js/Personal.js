// 填充用户信息
var email = sessionStorage.getItem( 'email' )
var nickName = sessionStorage.getItem( 'nickName' )
var HeadPortrait = sessionStorage.getItem( 'HeadPortrait' )

$( '.email' ).val( email )
$( '.nickname' ).val( nickName )
$( '#UserHead' ).attr( 'src', HeadPortrait )
