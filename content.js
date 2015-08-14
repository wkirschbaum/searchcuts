$('h3.r').each(function( index) {
  var shortcut_number = (index + 1) % 10;
  $(this).prepend( "press " + shortcut_number +": " );
  var link = $(this).children('a').attr('href');
  $(document).keypress(function( event ) {
    if ( event.which == 48 + shortcut_number ) {
      location.href = link;
    }
  });
});
