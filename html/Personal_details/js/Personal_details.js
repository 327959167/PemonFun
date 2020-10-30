var password = document.querySelector( '.password' )
var eye = document.getElementById( 'eye' )
var passwordConfirm = document.querySelector( '.passwordConfirm' )
var eye2 = document.getElementById( 'eye2' )
  //eye
eye.onclick = function( ) {
    if ( eye.className == 'fa fa-eye-slash' ) {
      eye.className = 'fa fa-eye'
      password.type = 'text'
    } else {
      eye.className = 'fa fa-eye-slash'
      password.type = 'password'
    }
  }
  // eye2
eye2.onclick = function( ) {
  if ( eye2.className == 'fa fa-eye-slash' ) {
    eye2.className = 'fa fa-eye'
    passwordConfirm.type = 'text'
  } else {
    eye2.className = 'fa fa-eye-slash'
    passwordConfirm.type = 'password'
  }
}

//修改功能的实现
$( '#updata' ).on( 'click', function( ) {
  $( '.nickname' ).css( {
    border: '2px solid red',
  } )
  $( '.password' ).css( {
    border: '2px solid red',
  } )
  $( '.passwordConfirm' ).css( {
    border: '2px solid red',
  } )
  $( '.picture' ).css( {
    border: '2px solid red',
  } )

  $( '.nickname' ).attr( 'readOnly', false )
  $( '.password' ).attr( 'readOnly', false )
  $( '.passwordConfirm' ).attr( 'readOnly', false )
  $( '.picture' ).attr( 'disabled', false )

  // 确认密码显现
  $( '#sure' ).show( )
} )

// 取消功能的实现
$( '#cancle' ).click( function( ) {
    $( '.nickname' ).css( {
      border: '1px solid #ccc',
    } )
    $( '.password' ).css( {
      border: '1px solid #ccc',
    } )
    $( '.passwordConfirm' ).css( {
      border: '1px solid #ccc',
    } )
    $( '.picture' ).css( {
      border: '1px solid #ccc',
    } )

    $( '.nickname' ).attr( 'readOnly', true )
    $( '.password' ).attr( 'readOnly', true )
    $( '.passwordConfirm' ).attr( 'readOnly', true )
    $( '.picture' ).attr( 'disabled', true )

    $( '.nickname' ).val( '' )
    $( '.password' ).val( '' )
    $( '.passwordConfirm' ).val( '' )
    $( '.picture' ).val( '' )

    // 确认密码隐藏
    $( '#sure' ).hide( )
    location.reload( )
  } )
  // 昵称验证
$( '.nickname' ).blur( function( ) {
    var nickname = $( '.nickname' ).val( )
    if ( nickname.trim( ).length == 0 ) {
      $( '.errorTxt' ).text( '昵称不能为空！' )
    } else if ( nickname.trim( ).length > 12 ) {
      $( '.errorTxt' ).text( '昵称长度不能超过12位！' )
      $( '.nickname' ).val( '' )
    }
  } )
  // 密码验证
$( '.password' ).blur( function( ) {
    var password = $( '.password' ).val( )
    if ( password.trim( ).length == 0 ) {
      $( '.errorTxt' ).text( '密码不能为空！' )
    } else if ( password.trim( ).length < 6 || password.trim( ).length > 24 ) {
      $( '.errorTxt' ).text( '密码长度为6~24位！' )
      $( '.password' ).val( '' )
    }
  } )
  // 确认密码
$( '.passwordConfirm' ).blur( function( ) {
  var passwordConfirm = $( '.passwordConfirm' ).val( )
  if ( passwordConfirm.trim( ).length == 0 ) {
    $( '.errorTxt' ).text( '确认密码不能为空！' )
  }
} )

// 确定修改按钮
$( '#sure' ).on( 'click', function( ) {
  var email = $( '.email' ).val( )
  var password = $( '.password' ).val( )
  var nickname = $( '.nickname' ).val( )
  var passwordConfirm = $( '.passwordConfirm' ).val( )
    // 用户上传的头像名称
  var file = $( '#upload' ).val( )
  var fileName = file.split( '\\' ).pop( )

  if ( nickname.trim( ).length == 0 ) {
    $( '.errorTxt' ).text( '昵称不能为空！' )
    return false
  } else if ( password != passwordConfirm ) {
    $( '.errorTxt' ).text( '确认密码与密码不一致！' )
    $( '.passwordConfirm' ).val( '' )
    return false
  } else {
    // 实现修改功能
    $.ajax( {
      type: 'post',
      url: '/update',
      data: {
        email: email,
        nickName: nickname,
        password: password,
        fileName: fileName,
      },
      success: function( response ) {
        if ( response != '1' ) {
          alert( response + ',请重新登录(✪ω✪)' )
            // 销毁之前的session
          sessionStorage.removeItem( 'nickName' )
            // 重新赋值给session
          sessionStorage.setItem( 'nickName', nickname )
          window.location = '/login'
        } else {
          alert( '修改失败，请稍后再试或联系管理员！' )
            // 页面重加载
          window.location.reload( )
        }
      },
      error: function( ) {
        alert( 'error' )
        window.location.reload( )
      },
    } )
  }
} )
