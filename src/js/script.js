
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if($(".js-hamburger").hasClass('is-active')){
    $('.js-hamburger').removeClass("is-active");
     $("html").toggleClass("is-fixed");
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

/*$("body").css("display", "block");
  var webStorage = function webStorage() {
    if (sessionStorage.getItem("access")) {
      $(".loading").addClass("is-none");
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem("access", 0);
      //ここにローディングの処理

      $(document).ready(function () {
        // ローディング画面を表示

        $(".loading__left-image").addClass("is-active");
        $(".loading__right-image").addClass("is-active");

        // ローディング画面のフェードアウト後にスクロール禁止を解除
        $("#loading").delay(1700).fadeOut("slow", function () {
          // フェードアウトが完了した後に実行されるコールバック関数
          // スクロール禁止を解除
          $("body").removeClass("loading__no-scroll");
          $(".loading__left-image").removeClass("is-active");
          $(".loading__right-image").removeClass("is-active");
        });

        // ローディング中はスクロール禁止
        $("body").addClass("loading__no-scroll");
      });
    }
  };
  webStorage();*/

//swiper
window.addEventListener('load', () => {
  const elem = document.querySelector('.p-swiper-container');
  if (elem === null) return;
  const swiperParams = {
    loop: true, // ループさせる
    effect: 'fade', // フェードのエフェクト
    autoplay: {
      delay: 3000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    speed: 4000, // ２秒かけながら次の画像へ移動
    allowTouchMove: false, // マウスでのスワイプを禁止
    navigation: {
      // 左右のページ送りを有効にする
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true, //この行を追記する
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
  spaceBetween: 40,
  freeModeSticky: true,
  autoWidth: true,
  autoHeight: true,
  speed: 4000,          //追記
  slidesPerView: 1.3,     //追記
  breakpoints: {
    // スライドの表示枚数：376px以上の場合
    376: {
      slidesPerView: 1.5,
    },

      // スライドの表示枚数：540px以上の場合
    540: {
      slidesPerView: 2,
    },
      // スライドの表示枚数：767px以上の場合
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3.8,
    },
    1440: {
      slidesPerView: 4,
    }
  },
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})


//information・voice・price
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight){
            $(this).addClass('active');
          }
      });
    });
  $(window).scroll(function (){
    {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
    }
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
});


