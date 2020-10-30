var loginFlag = sessionStorage.getItem( 'loginFlag' )
if ( !loginFlag ) {
  window.location = '/login'
}
