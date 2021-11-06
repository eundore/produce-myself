var len = document.querySelectorAll('.topic').length;
var per = 100/len;
var dir = 0;

$(window).scroll(function() {

    var wins = $(this).scrollTop();
    var h = $('body').outerHeight();
    var h2 = $(window).outerHeight();
    var height = h - h2;
    var bar = (wins / height) * 100;
  
    $('.progress-bar').css('width', bar + '%');

    var n = Math.round(bar/per);

    if(dir < n){
        $(`.topic:nth-of-type(${n})`).css('color','white');
        dir = n;
    }
    else if (dir > n){
        $(`.topic:nth-of-type(${dir})`).css('color','black');
        dir = n;
    }
    
  });

  $('#insta').css('animation','bounce .3s ease infinite alternate');
  
  $( "#insta" ).mouseenter(function() {
    $('#insta').css('animation','');
  });

  $( "#insta" ).mouseleave(function() {
    $('#insta').css('animation','bounce .3s ease infinite alternate');
  });

  function scrollMove(block) {

    if(block === '#topic_0'){
      document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'start'});
    }else if( block === '#topic_5'){
      document.querySelector('body').scrollIntoView({ behavior: 'smooth', block: 'end'});
    }else{
      document.querySelector(block).scrollIntoView({ behavior: 'smooth' });
    }
  }