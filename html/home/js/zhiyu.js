//切换的图片位数
var a = 1
  //初始加载轮播图
$( document ).ready( function( ) {
    compute( a )
  } )
  //判断轮播图加载到第几张，并且装换轮播图里面的样式
function compute( a ) {
  $( '#being' ).css( 'background-image', 'url(../images/ooimg/oo' + a + '.jpg)' )
  for ( i = 1; i < 5; i++ ) {
    if ( a == i ) {
      $( '.clrle li:nth-child(' + i + ')' ).css( {
        'background-color': 'rgb(255,255,255,0)',
        width: '15px',
        height: '15px',
        background: 'url(../images/ooimg/wawa.png)',
      } )
    } else {
      $( '.clrle li:nth-child(' + i + ')' ).css( {
        background: 'none',
        width: '12px',
        height: '12px',
        'background-color': 'rgb(255,255,255,0.4)',
      } )
    }
  }
}
//轮播图中小圆点击事件
$( '.clrle li' ).click( function( ) {
    a = $( this ).index( ) + 1
    compute( a )
  } )
  //轮播图左右箭头显示与消失的控制
$( '#being' ).hover(
    function( ) {
      $( '#being span' ).css( 'display', 'block' )
    },
    function( ) {
      $( '#being span' ).css( 'display', 'none' )
    }
  )
  //轮播图左右箭头停留事件
$( '#being span' ).hover(
    function( ) {
      if ( $( this ).index( ) == 0 ) {
        $( this ).css( 'background', "url('../images/ooimg/lefthover.png')" )
      } else {
        $( this ).css( 'background', "url('../images/ooimg/righthover.png')" )
      }
    },
    function( ) {
      if ( $( this ).index( ) == 0 ) {
        $( this ).css( 'background', "url('../images/ooimg/left.png')" )
      } else {
        $( this ).css( 'background', "url('../images/ooimg/right.png')" )
      }
    }
  )
  //轮播图左右箭头点击事件
$( '#being span' ).click( function( ) {
  if ( $( this ).index( ) == 0 ) {
    a--
    if ( a == 0 ) {
      a = 4
    }
  } else {
    a++
    if ( a == 5 ) {
      a = 1
    }
  }
  compute( a )
} )

function load( ) {
  a++
  if ( a == 5 ) {
    a = 1
  }
  compute( a )
}
//8s自动切换轮播图背景
setInterval( load, 8000 )
$( '#head_left' ).scroll( function( ) {
    var scrollTop = $( this ).scrollTop( )
    if ( scrollTop >= 400 ) {
      //滚动到底部执行事件
      $( '.bottom_img' ).css( 'display', 'none' )
    } else if ( scrollTop < 400 ) {
      $( '.bottom_img' ).css( 'display', 'block' )
    }
  } )
  //控制ul中立的属性
for ( i = 1; i <= $( '#content ul li:last-child' ).index( ) + 1; i++ ) {
  if ( i % 5 == 0 ) {
    $( '#content ul li:nth-child(' + i + ')' ).css( 'margin-right', '0px' )
  }
}
