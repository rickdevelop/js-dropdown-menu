$('.nav_right_item').mouseenter(function() {
  $(this).addClass('open');
  $(this).children('.dropmenu').addClass('open');
});

$('.nav_right_item').mouseleave(function() {
  $(this).removeClass('open');
  $(this).children('.dropmenu').removeClass('open');
});
