jQuery(document).ready(function(){
  $('h1').on('mouseenter', function () {
    $(this).text("WHOOOOAAAAAAA bro!");
  });
    var origYear;
    var origNumber;
  $('tr').on('mouseenter', function(){
    origYear = $(this).find('td').first().text();
    $(this).find('td').first().text("ZONK");
  });
  $('tr').on('mouseleave', function(){
    $(this).find('td').last().text("WOO WOO");
    $(this).find('td').first().text(origYear);
  });
});
