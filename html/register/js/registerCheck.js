$( function( ) {
  // 获取验证码
  var yzm
    // 初始验证码
  yzm = drawPic( )

  // 昵称
  $( '.nickname' ).blur( function( ) {
    var nickname = $( '.nickname' ).val( )
    if ( nickname.trim( ).length == 0 ) {
      $( '.errorTxt' ).text( '昵称不能为空！' )
    } else if ( nickname.trim( ).length > 12 ) {
      $( '.errorTxt' ).text( '昵称长度不能超过12位！' )
      $( '.nickname' ).val( '' )
    }
  } )

  // 邮箱
  $( '.email' ).blur( function( ) {
    var reg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
    var email = $( '.email' ).val( )
    if ( email.trim( ).length == 0 ) {
      $( '.errorTxt' ).text( '邮箱不能为空！' )
    } else if ( !reg.exec( email ) ) {
      $( '.errorTxt' ).text( '邮箱格式错误！' )
      $( '.email' ).val( '' )
    }
  } )

  // 密码
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
    //验证码
  $( '.VerificationCode' ).blur( function( ) {
      var VerificationCode = $( '.VerificationCode' ).val( )
      if ( VerificationCode.trim( ).length == 0 ) {
        $( '.errorTxt' ).text( '图形验证码不能为空！' )
      }
    } )
    // 看不清，换一张
  $( '#changeImg' ).on( 'click', function( ) {
    drawPic( )
    yzm = drawPic( )
  } )

  // 注册按钮
  $( '.register' ).click( function( ) {
    // 昵称
    var nickname = $( '.nickname' ).val( )
      // 邮箱
    var email = $( '.email' ).val( )
      // 密码
    var password = $( '.password' ).val( )
      // 确认密码
    var passwordConfirm = $( '.passwordConfirm' ).val( )
      // 验证码
    var VerificationCode = $( '.VerificationCode' ).val( )
      // 获取头像的文件名
      //获取文件的value值
    var file = $( '#upload' ).val( )
      //获取文件名+扩展名
    var fileName = file.split( '\\' ).pop( )

    // 密码验证
    if ( password != passwordConfirm ) {
      $( '.errorTxt' ).text( '确认密码与密码不一致！' )
      $( '.passwordConfirm' ).val( '' )
      return
    }
    // 验证码验证
    if ( VerificationCode != yzm ) {
      $( '.errorTxt' ).text( '验证码错误！' )
      $( '.VerificationCode' ).val( '' )
      return
    }
    if (
      nickname.trim( ).length != 0 &&
      email.trim( ).length != 0 &&
      password.trim( ).length != 0 &&
      passwordConfirm.trim( ).length != 0 &&
      VerificationCode.trim( ).length != 0
    ) {
      // 其他用户信息的上传
      $.ajax( {
        type: 'post',
        url: '/register',
        data: {
          nickname: nickname,
          email: email,
          password: password,
          fileName: fileName,
        },
        success: function( data ) {
          if ( data ) {
            alert( '注册成功，返回登录页面' )
            window.location = '/login'
          } else {
            alert( '注册失败，请稍后再试或联系客服。' )
          }
        },
      } )
    } else {
      $( '.errorTxt' ).text( '请填写完整信息！' )
    }
  } )
} )
