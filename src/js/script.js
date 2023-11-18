
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
    $('.loader').fadeOut(500, function(){
      // ローダーがフェードアウトした後に以下のコードを実行
      $('.mv').fadeIn(300); // .mvを表示
    });
  }

const jsLoaderBg = '.loader' // カーテン（白い背景）
const jsTextbox = '.text-box' //テキストボックス
const jsText = '.p-swiper-desc'//メインビジュアルのタイトル
/*const jsLeftimg = '.loading__left-image'
const jsRightimg = '.loading__right-image'*/
const mv = '.mv'
const tl = gsap.timeline();

tl.to(
  jsTextbox, {
    opacity: 1,
    duration: 0.8,
    delay: 0.8,
  },
)
.to(
  jsTextbox, {
    opacity: 0,
  }
)
.to(".js-load-img",
{
  y:0,
  duration: 1,
  stagger:0.2,
  delay: 0
})
.to("#container",{
opacity: 0,
display:"none",
})
.to(
  jsLoaderBg, {
    opacity: 0,
    display:"none",
  }
)
})



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
  spaceBetween: 24,
  freeModeSticky: true,
  //autoWidth: true,
  speed: 4000,          //追記
  slidesPerView: 'auto',   //追記
  breakpoints: {
    768: {
      spaceBetween: 40
    }
  },
  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    clickable: true
	}
});



//information・voice・price
$(window).on("scroll", function () {
  // .information__img
  if ($(".information__img").length > 0) {
    var windowPosition = $(window).scrollTop() + $(window).height();
    var boxPosition = $(".information__img").offset().top;
    if (windowPosition >= boxPosition) {
      $(".information__img").addClass("is-active");
    }
  }
  if ($(".voice-card__img").length > 0) {
    var voicePosition = $(".voice-card__img").offset().top;
    if (windowPosition >= voicePosition) {
      $(".voice-card__img").addClass("is-active");
    }
  }

  /* .voice-card__img--2
  if ($(".voice-card__img--2").length > 0) {
    var voicePosition2 = $(".voice-card__img--2").offset().top;
    if (windowPosition >= voicePosition2) {
      $(".voice-card__img--2").addClass("is-active");
    }
  }*/

  // .price__img
  if ($(".price__img").length > 0) {
    var pricePosition = $(".price__img").offset().top;
    if (windowPosition >= pricePosition) {
      $(".price__img").addClass("is-active");
    }
  }
});


//headerクラス付与
let header = $('.header');
let headerHeight = $('.header').height();
let height =$('.mv').height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height - headerHeight) {//メインビューの高さから、headerの高さをひいてあげるコード。メインビュー以下になった時にパッと切り替わるようになる！
    header.addClass('is-color');
  } else {
    header.removeClass('is-color');
  }
});