var vm = new Vue( {
  el: '#app',
  data: {
    email: '',
    password: '',
  },
  methods: {
    checked: function( ) {
      if ( this.email.trim( ).length == 0 || this.password.trim( ).lenght == 0 ) {
        alert( '邮箱或密码为空' )
        return false
      } else {
        $.ajax( {
          type: 'POST',
          url: '/loginCheck',
          data: {
            email: this.email,
            password: this.password,
          },
          success: function( data ) {
            if ( data[ 0 ] == '1' ) {
              // 登录状态的判断
              sessionStorage.setItem( 'loginFlag', true )
                // 跳转图文页面并携带emaill作为用户判断
              window.location = '/graphic?email=' + data[ 1 ]
              sessionStorage.setItem( 'nickName', data[ 2 ] )
              sessionStorage.setItem( 'HeadPortrait', data[ 3 ] )
              return false
            }
            alert( data )
          },
        } )
      }
    },
  },
} )
