
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
    $(".js-hamburger").click(function () {
      $("body").toggleClass("noscroll");
    });
  });

  

  // informationページのtabメニュー
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
  // 初期状態でドロワーをオープンにする
  $('.js-faq-question, .js-blog-question').next().slideDown();
  $('.js-faq-question, .js-blog-question').addClass('is-open');

  // クリック時のトグル機能を追加
  $('.js-faq-question, .js-blog-question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
  });
});


// home.htmlのアーカイブの矢印

$(function () {
  $('.sub-blog-archive__year').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass("is-open");
  });
});


//モーダル要素を取得
var modal = document.getElementById("myModal");

// モーダルで表示する画像を取得
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


var galleryImages = document.querySelectorAll(".sub-gallery-list__item img");
galleryImages.forEach(function(img) {
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt; // ここでalt属性を設定
  }
});

// クローズボタンを取得
var span = document.getElementsByClassName("close")[0];

// クローズボタンをクリックしたらモーダルを閉じる
span.onclick = function() {
  modal.style.display = "none";
}


// スクロールトップ
$(document).ready(function(){
  $('.pagetop a').on('click', function(e){
    e.preventDefault(); // Prevent the default anchor behavior
    var target = $(this).attr('href'); // Get the target element's id
    $('html, body').animate({
      scrollTop: $(target).offset().top // Scroll to the target element
    }, 1000); // Duration in milliseconds
  });
});