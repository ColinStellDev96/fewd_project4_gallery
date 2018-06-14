// Lightbox jQuery Plug-in Settings

lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false
  })

// Search Filter Function: takes user search input to see if it matches the 'data-title' attr value or the 'data-alt' attr value, 
// Photos are displayed or hidden based on input

$('#filter').on('keyup', function (event) {
    var srchStr = $(this).val().toLowerCase();
    console.log(srchStr);
    $('.image a').each(function(){
        if($(this).attr('data-title').toLowerCase().indexOf(srchStr) == -1 && $(this).attr('data-alt').toLowerCase().indexOf(srchStr) == -1 )  {
            $(this).hide(1000);
        } else {
            $(this).show(1000);
        }
    });
});