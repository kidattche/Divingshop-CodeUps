
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if($(".js-hamburger").hasClass('is-active')){
    $('.js-hamburger').removeClass("is-active");
    // $("html").toggleClass("is-fixed");
    $(".js-sp-nav").fadeOut();
   } else {
    $(".js-hamburger").addClass("is-active");
    $(".js-sp-nav").fadeIn();

   }
  });


});

//ローディング
$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})

//swiper
window.addEventListener('load', () => {
  const elem = document.querySelector('.p-swiper-container');
  if (elem === null) return;
  const swiperParams = {
    loop: true, // ループさせる
    effect: 'fade', // フェードのエフェクト
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    speed: 2000, // ２秒かけながら次の画像へ移動
    allowTouchMove: false, // マウスでのスワイプを禁止
    navigation: {
      // 左右のページ送りを有効にする
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true //この行を追記する
    },
  };
  const swiper = new Swiper('.p-swiper-container', swiperParams);
});

// Campaignスライド

const swiper = new Swiper('.js-campaign-swiper', {
  loop: true,
  autoplay: {
      delay: 0,
  },
  autoWidth: true,
  autoHeight: true,
  speed: 3000,          //追記
  slidesPerView: 4,     //追記
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})


/*informationとvoiceのアニメーション
//アニメーション
//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;
 
//.informationーimgの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
    $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});*/

/*$(document).ready(function () {
  // ドキュメントが読み込まれたら実行
  $(".information-img").css("opacity", "1"); // 要素を表示する
});*/

// アニメーション
// 要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

// .information-imgの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
    console.log("スクリプトが読み込まれました");
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0'); // 画像を初めは非表示にする
    color.css('width', '0%');
    // inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        console.log("スクロールイベントがトリガーされました");
        if (counter == 0) {
            // 背景色が表示された後、画像を表示するアニメーション
            $(this).delay(200).animate({
                'width': '100%'
            }, speed, function () {
                image.css('opacity', '1'); // 画像を表示
                $(this).css({
                    'left': '0',
                    'right': 'auto'
                });
                $(this).animate({
                    'width': '0%'
                }, speed);
            })
            counter = 1;
        }
    });
});
/*// アニメーション
// 要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

// .information-imgの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
         console.log("スクリプトが読み込まれました");
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0'); // 画像を初めは非表示にする
    color.css('width', '0%');
    // inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            // 背景色が表示された後、画像を表示するアニメーション
            $(this).delay(200).animate({
                'width': '100%',
                'left': '0',
                'right': 'auto'
            }, speed, function () {
                image.css('opacity', '1'); // 画像を表示
                $(this).css('left', '0'); // leftを再設定
                $(this).animate({
                    'width': '0%'
                }, speed);
            });
            counter = 1;
        }
    });
});*/

/*$(document).ready(function () {
  var box = $('.colorbox');
  var speed = 700;

  box.each(function () {
      var color = $(this).find('.color');
      var image = $(this).find('img');
      var counter = 0;

      image.css('opacity', '0'); // 画像を初めは非表示にする
      color.css('width', '0%');

      $(window).on('scroll', function () {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          var elementTop = box.offset().top;

          if (!counter && windowBottom > elementTop) {
              color.animate({
                  'width': '100%',
                  'left': '0',
                  'right': 'auto'
              }, speed, function () {
                  image.css('opacity', '1'); // 画像を表示
                  color.css('left', '0'); // leftを再設定
                  color.animate({
                      'width': '0%'
                  }, speed);
              });
              counter = 1;
          }
      });
  });
});*/
/*$(document).ready(function () {
  console.log("スクリプトが読み込まれました");
  var box = $('.colorbox');
  var speed = 700;

  box.each(function () {
      var color = $(this).find('.color');
      var image = $(this).find('img');
      var counter = 0;

      image.css('opacity', '0'); // 画像を初めは非表示にする
      color.css('width', '0%');

      $(window).on('scroll', function () {
        console.log("スクロールイベントがトリガーされました");
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          var elementTop = box.offset().top;

          if (!counter && windowBottom > elementTop) {
              color.animate({
                  'width': '100%',
                  'left': '0',
                  'right': 'auto'
              }, {
                  duration: speed,
                  step: function (now) {
                      if (now >= 50) {
                          image.css('opacity', '1'); // 画像を表示
                      }
                  },
                  complete: function () {
                      color.css('left', '0'); // leftを再設定
                      color.animate({
                          'width': '0%'
                      }, speed);
                  }
              });
              counter = 1;
          }
      });
  });
});*/

