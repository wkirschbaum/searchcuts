// select search result for number pressed
$('h3.r').each(function( index) {
  var shortcut_number = (index + 1) % 10;
  $(this).before( "<div style='position: absolute; left: -13px; top: 3px;'>" + shortcut_number +": <div>" );
  var link = $(this).children('a').attr('href');
  $(document).keypress(function( event ) {
    if ( event.which == 48 + shortcut_number ) {
      location.href = link;
    }
  });
});

//go to search input when pressing s
$(document).keypress(function( event ) {
    var searchInput = $('#lst-ib');
    if (event.which === 115 && !searchInput.is(':focus')) {
      $('#lst-ib').focus();
      return false;
    }
});
