lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false
  })

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