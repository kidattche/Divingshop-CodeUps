
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
const jsTextbox = '.loader-title__box' //テキストボックス
const jsText = '.mv__title-wrap'//メインビジュアルのタイトル
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
.to(".loader__container",{
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
  const elem = document.querySelector('.js-mv-swiper');
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
  const swiper = new Swiper('.js-mv-swiper', swiperParams);
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




// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  // 背景色が伸びて出現（右から左）
$('.bgRLextendTrigger').each(function(){ //bgRLextendTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
  }else{
    $(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
  }
});
 // 文字列を囲う子要素
$('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
  }else{
    $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
  }
});   
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


Resources


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

//sp-nav背景noscroll$(function(){
  $(function () {
    // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
    $(".hamberger").click(function () {
  
      // 現在のbodyタグのoverflowスタイルを確認
      if ($("body").css("overflow") === "hidden") {
  
        // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
        $("body").css({ height: "", overflow: "" });
  
      } else {
  
        // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
        $("body").css({ height: "100%", overflow: "hidden" });
  
      }
    });
  });