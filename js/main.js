lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'showImageNumberLabel': false
  })

$('#filter').on('keyup', function (event) {
    var searchString = $(this).val().toLowerCase();
    console.log(searchString);
});