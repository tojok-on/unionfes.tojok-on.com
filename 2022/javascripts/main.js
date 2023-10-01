//ローディング関連
//読み込みが完了したら実行
$(window).on('load',function() {
  // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
  $('body').removeClass('no-scroll');
  $('.loading').fadeOut(400,function() {
    $('.top-front img').addClass('fade-in-img');
    $('.top-front .text1,.text2,.text3').addClass('fade-in-text');
  });

  //遅延読み込み
  $('#v-band01').attr('src','https://www.youtube.com/embed/saOq9S8mfSc');
  $('#v-band02').attr('src','https://www.youtube.com/embed/I8bNW2xplQE');
  $('#v-band03').attr('src','https://embed.music.apple.com/jp/album/%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%AB/720409016?i=720409813');
  $('#v-band04').attr('src','https://www.youtube.com/embed/0wF7P_UcETw?start=8337');
  $('#v-band05').attr('src','https://www.youtube.com/embed/GbCpUKbOSqo');
  $('#v-band06').attr('src','https://www.youtube.com/embed/0aHRc4ZG58c');
  $('#v-band07').attr('src','https://www.youtube.com/embed/l4c-HphEaz4');
  $('#v-band08').attr('src','https://www.youtube.com/embed/H7JEExJ9A0Y');
  // $('#v-band09').attr('src','https://www.youtube.com/embed/pudLJ-L9ZI8');
  $('#v-band10').attr('src','https://www.youtube.com/embed/3cupbrwhNp0');
  $('#v-band11').attr('src','https://www.youtube.com/embed/Ah24qaazA7I');
  $('#v-band12').attr('src','https://www.youtube.com/embed/2cdfJbdLZoA');
  $('#v-band13').attr('src','https://www.youtube.com/embed/qknDI1k39Ic');
});

//メニューから遷移時のスクロールアニメーション
$(document).ready(function() {
  var time = 450;

  var urlHash = location.hash;
  if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function() {
      scrollToAnker(urlHash);
    }, 100);
  }

  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var decodedHash = decodeURI(this.hash);
    console.log(decodedHash);
    var hash = decodedHash == "#" || decodedHash == "" ? 'html' : decodedHash;
    scrollToAnker(hash);
    return false;
  });

  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, time, 'swing');
  }
})

//バンド紹介カードのアニメーション
$(function() {
  $(window).scroll(function() {
    $('.band-card').each(function() {
      var elemTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemTop - windowHeight ){
        $(this).addClass('float-in')
      }
    })
  })
})

//メニュー表示・バンド詳細表示
$(function() {
  var openBtn2 = $('.open-btn2');
  var menu = $('.menu');
  var open = $('.modal-open');
  var close = $('.modal-close');
  var container = $('.modal-container');

  openBtn2.on('click', function() {
    openBtn2.toggleClass('active');
    menu.toggleClass('active');
    $('body').removeClass('no-scroll');
    $('.active').each(function() {
      if ($(this).hasClass('modal-container') || $(this).hasClass('menu')) {
        $('body').addClass('no-scroll');
        return false;
      }
    });
  });

  open.on('click', function() {
    var target = $(this).data('target');
    var modal = document.getElementById(target);

    $(modal).addClass('active');
    $('body').addClass('no-scroll');
    return false;
  });

  close.on('click', function() {
    container.removeClass('active');
    $('body').removeClass('no-scroll');
  });

  $(document).on('click', function(e) {
    if(!$(e.target).closest('.modal-body').length) {
      container.removeClass('active');
      $('body').removeClass('no-scroll');
      $('.active').each(function() {
        if ($(this).hasClass('modal-container') || $(this).hasClass('menu')) {
          $('body').addClass('no-scroll');
          return false;
        }
      });
    }
  });
})
