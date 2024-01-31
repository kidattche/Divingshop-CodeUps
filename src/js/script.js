
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
const jsTextbox = '.loader__title-box' //テキストボックス
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
$('.fadeinTrigger').each(function(){ //fadeinTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeinRLextend');// 画面内に入ったらfadeinRLextendというクラス名を追記
  }else{
    $(this).removeClass('fadeinRLextend');// 画面外に出たらfadeinRLextendというクラス名を外す
  }
});
 // 文字列を囲う子要素
$('.fadeinappearTrigger').each(function(){ //fadeinappearTriggerというクラス名が
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeinappear');// 画面内に入ったらfadeinappearというクラス名を追記
  }else{
    $(this).removeClass('fadeinappear');// 画面外に出たらfadeinappearというクラス名を外す
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

  // Campaignページ,informationページのtabメニュー
  jQuery(function ($) {
    $('.js-tab-menu').on('click', function () {
        $('.js-tab-menu').removeClass('is-active');
        $('.js-tab-content').removeClass('is-active');
        $(this).addClass('is-active');
        var number = $(this).data("number");
        $('#' + number).addClass('is-active');
    });
});

// FAQページのドロワーオープン
jQuery(function ($) {
  $('.js-faq-question, .js-blog-question').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('is-open');
  });
});

// home.htmlのアーカイブの矢印
document.addEventListener("DOMContentLoaded", function() {
  var yearLinks = document.querySelectorAll('.sub-blog-archive__year > a, .single-archive__year > a');

  yearLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      toggleActiveState(link.parentElement);
    });
  });
});

function toggleActiveState(element) {
  // 全ての年のリンクからactiveクラスを削除
  var allYearLinks = document.querySelectorAll('.sub-blog-archive__year, .single-archive__year');
  allYearLinks.forEach(function(year) {
    year.classList.remove('active');
  });

  // クリックされた年のリンクにactiveクラスを追加
  element.classList.add('active');
}