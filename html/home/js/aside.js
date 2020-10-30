$( '#HeadNav>li' ).on( 'click', function( ) {
  $( this ).addClass( 'active' ).siblings( ).removeClass( 'active' )
} )
$( '.ActiveCbl>a' ).on( 'click', function( ) {
  $( this )
    .css( 'background', 'pink' )
    .parent( )
    .siblings( )
    .find( 'a' )
    .css( 'background', 'teal' )
} )
