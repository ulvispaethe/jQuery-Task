var total = $('.carousel img').length;
var current = 1;

$('#nextBtn').click(function() {
  current++;
  if (current > total) {
    current = 1;
  }
  $('.carousel img').eq(current - 1).show();
  $('.carousel img').eq(current - 2).hide();
});

$('#prevBtn').click(function() {
  current--;
  if (current < 1) {
    current = total;
  }
  $('.carousel img').eq(current - 1).show();
  $('.carousel img').eq(current).hide();
});



  
  