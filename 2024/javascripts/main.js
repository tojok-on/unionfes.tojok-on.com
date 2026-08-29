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
	$('#v-band01').attr('src','https://www.youtube.com/embed/auQjeip42Wc?si=UL9KxvdhTo8dXDnE');
	$('#v-band02').attr('src','https://www.youtube.com/embed/ODBn2DByy1Q?si=efcybRarpwj_nmWi');
	$('#v-band03').attr('src','https://www.youtube.com/embed/luqEQHHcDfk?si=xs43akpaF-U_7Dmz');
	$('#v-band04').attr('src','https://www.youtube.com/embed/d_goXYfMedk?si=Zin_gLKxVjqhAxfY');
	$('#v-band05').attr('src','https://www.youtube.com/embed/y2b9ms6Z8ZE?si=-6B6-FGTvvcFLG7J');
	$('#v-band06-1').attr('src','https://embed.music.apple.com/jp/album/sarasa/1298403443?i=1298403457');
	$('#v-band06-2').attr('src','https://open.spotify.com/embed/track/2apxaLL8gbCFLIU9PvrAwo?utm_source=generator');
	$('#v-band07').attr('src','https://www.youtube.com/embed/lMc5QIW98m0?si=Z4TjqHvdxnDQGxTR');
	$('#v-band08-1').attr('src','https://embed.music.apple.com/jp/album/tattoo%E3%81%82%E3%82%8A/720393471?i=720393901');
	$('#v-band08-2').attr('src','https://open.spotify.com/embed/track/7JVWIil4h9GivIhfIOQ6NO?utm_source=generator');
	$('#v-band09-1').attr('src','https://embed.music.apple.com/jp/album/%E9%80%8F%E6%98%8E%E5%B0%91%E5%A5%B3/1722996800?i=1722996806');
	$('#v-band09-2').attr('src','https://open.spotify.com/embed/track/4RvFJMTM1OhvMEtoESgGVM?utm_source=generator');
	$('#v-band10').attr('src','https://www.youtube.com/embed/MH23ObBePiw?si=30bwrF4pHVAekNT7');
	$('#v-band11-1').attr('src','https://embed.music.apple.com/jp/album/%E5%8D%81%E5%8C%B9%E3%81%AE%E7%86%8A/1529409134?i=1529409138');
	$('#v-band11-2').attr('src','https://open.spotify.com/embed/track/5rnVhqzo2YaQIrDwMAGjB8?utm_source=generator');
	$('#v-band12-1').attr('src','https://embed.music.apple.com/jp/album/modify-youth/1696051134?i=1696051144');
	$('#v-band12-2').attr('src','https://open.spotify.com/embed/track/7AAchgAYr6hI80KmCuP8N1?utm_source=generator');
	$('#v-band13').attr('src','https://www.youtube.com/embed/8-BmYkdUAnY?si=4FzFP1NbD_vEigh0');
	
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
		var targetDate = new Date("2024/7/27 00:00:00"); //開催日設定
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
		var url = 'https://unionfes.tojok-on.com/2024/';
		
		navigator.clipboard.writeText(url);
	});
});
