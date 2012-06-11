$(document).ready(function() {
  // Handler for .ready() called.
  // alert('yo');

  var contentHeight = 630;
  var contentOffset;

  setTimeout(function(){
    $("ul#carousel-menu li:first-child div.black-panel").stop().animate({ left: "0px" }, 100);
  }, 400);

  $("ul#carousel-menu li").hover(function() {
        $(this).parent().find('div.black-panel').stop().animate({ left: "-320px" }, 100);

    $(this).find('div.black-panel').stop().animate({ left: "0px" }, 100);
    contentOffset = "-" + ($("ul#carousel-menu li").index($(this)) * contentHeight) + "px";
    $("ul#carousel-content").stop().animate({ top: contentOffset }, {
    duration: 300,
    specialEasing: {
      width: 'linear',
      height: 'easeOutExpo'
    }
  });
  },function(){
  });

  $("ul#carousel-content li").hover(function() {
    $(this).find('span.content-link').stop().animate({ backgroundColor:'#F64F37' }, 200);
    console.log($(this).parent().find('span.content-link'));
  },function(){
    $(this).find('span.content-link').stop().animate({ backgroundColor:'black' }, 200);
  });


});