document.querySelector( '.register' ).onclick = function( ) {
  var formData = new FormData( )
  formData.append( 'file', $( '#upload' )[ 0 ].files[ 0 ] )

  $.ajax( {
    url: '/UserHead',
    type: 'POST',
    data: formData,
    /*要带的值，在这里只能带一个formdata ，不可以增加其他*/
    dataType: 'text', //传递数据的格式  text才能触发succcess  json不能
    async: false, //这是重要的一步，防止重复提交的
    cache: false, //设置为false，上传文件不需要缓存。
    contentType: false, //设置为false,因为是构造的FormData对象,所以这里设置为false。
    processData: false, //设置为false,因为data值是FormData对象，不需要对数据做处理。
    success: function( responText ) {
      // $('#upload').val(fileName);
      console.log( responText )
    },
    fail: function( ) {
      console.log( 'error' )
    },
  } )
}
