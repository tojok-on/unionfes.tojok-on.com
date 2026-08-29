//ローディング関連
//読み込みが完了したら実行
$(window).on('load',function() {
	//ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
	$('body').removeClass('no-scroll');
	$('.loading').fadeOut(500,function() {
		$('.logo-img img').addClass('fade-in-img');
		$('.logo-img p').addClass('fade-in-text');
		$('.timer').addClass('fade-in-text');
		$('.nav-scroll').addClass('slide-in');
	});

	//遅延読み込み
	//$('#v-band01').attr('src','https://www.youtube.com/embed/saOq9S8mfSc');
	$('#v-band01').attr('src','https://www.youtube.com/embed/xfG6L9I7N8I');
	$('#v-band02').attr('src','https://www.youtube.com/embed/FszMI0eX310');
	$('#v-band03').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1539668671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true');
	$('#v-band04').attr('src','https://www.youtube.com/embed/siNFnlqtd8M');
	$('#v-band04-2').attr('src','https://open.spotify.com/embed/track/5Dsgyf6cz0dKNp9me6vKnv?utm_source=generator');
	$('#v-band04-3').attr('src','https://embed.music.apple.com/jp/album/%E5%8F%88%E4%B8%89%E9%83%8E/1568980595?i=1568980896');
	$('#v-band05').attr('src','https://embed.music.apple.com/jp/album/38%E6%9C%8862%E6%97%A5/1543126066?i=1543126077');
	$('#v-band06').attr('src','https://www.youtube.com/embed/jeVzFBYJqlk');
	$('#v-band07').attr('src','https://www.youtube.com/embed/RXp_f6XCQVg');
	$('#v-band07-2').attr('src','https://ext.nicovideo.jp/thumb/sm41844375');
	$('#v-band08').attr('src','https://www.youtube.com/embed/scqDV8X5-Xk');
	$('#v-band09').attr('src','https://www.youtube.com/embed/XnBD_MEdHWk');
	$('#v-band10').attr('src','https://embed.music.apple.com/jp/album/he-is-mine/1568033402?i=1568033625');
	$('#v-band11').attr('src','https://www.youtube.com/embed/3svykRR83w4');
	$('#v-band12').attr('src','https://www.youtube.com/embed/oTpR7SKqGVI');
	$('#v-band13').attr('src','https://www.youtube.com/embed/-sQvw9mtEU4');
	
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
		var headerHeight = 125;
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop:position}, time, 'swing');
	}
})

//カウントダウンタイマー
$(function(){
	setInterval(function() {
		var now = new Date();
		var targetDate = new Date("2023/7/29 00:00:00"); //開催日設定
		var remainTime = targetDate - now;
		
		//開催日を過ぎたら処理しない
		if(remainTime < 0) {
			//タイマー非表示
			$('.timer').css('display','none');
			return false;
		}
		
		var difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24);
		var difHour = Math.floor(remainTime / 1000 / 60 / 60) % 24;
		var difMin = Math.floor(remainTime / 1000 / 60) % 60;
		var difSec = Math.floor(remainTime / 1000) % 60;
		
		$('#countdown-day').text(difDay);
		$('#countdown-hour').text(difHour);
		$('#countdown-min').text(difMin);
		$('#countdown-sec').text(difSec);
	}, 1000);
})

//一番上から動いた時
$(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		
		if (scroll == 0) {
			$('.slider').removeClass('fade-out');
			$('.timer').css('display', 'initial');
			$('.logo-box').css('display', 'initial');
			$('.hp-title').removeClass('fade-in');
		} else {
			$('.slider').addClass('fade-out');
			$('.timer').css('display', 'none');
			$('.logo-box').css('display', 'none');
			$('.hp-title').addClass('fade-in');
		}
	});
});
	

//キャプション・バンド紹介カードのアニメーション
$(function() {
	$(window).scroll(function() {
		//キャプション
		$('.caption').each(function() {
			var elemTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height()*0.85;
			if (scroll > elemTop - windowHeight ){
				$(this).addClass('zoom-in')
			}
		})
		//サブキャプション
		$('.sub-caption').each(function() {
			var elemTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height()*0.85;
			if (scroll > elemTop - windowHeight ){
				$(this).addClass('zoom-in')
			}
		})
		//バンド紹介カード
		$('.band-card').each(function() {
			var elemTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemTop - windowHeight ){
				$(this).addClass('float-in')
			}
		})
		//青背景
		$('.content-blue').each(function() {
			var elemTop = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height()*0.85;
			if (scroll > elemTop - windowHeight ){
				$(this).addClass('slide-in')
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

//URLコピーボタン
$(function() {
	var copyBtn = $('.copy-share-btn');
	
	copyBtn.on('click', function() {
		//var url = $(this).data('url');
		//なんかうまくいかないので固定文字列代入
		var url = 'https://unionfes.tojok-on.com/2023/';
		
		navigator.clipboard.writeText(url);
	});
});
