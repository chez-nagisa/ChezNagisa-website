jQuery("#js-header-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-header-open").toggleClass("is-checked");
  jQuery("#js-drawer").toggleClass("is-checked");
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true, // 無限ループ
    loopedSlides: 8, // ループ時のスライド数を増やす
    autoplay: {
      delay: 0, // 停止せずにスライドを流す
      disableOnInteraction: false, // ユーザーが操作しても止まらない
    },
    speed: 3000, // 3秒でスライドが移動する
    allowTouchMove: false, // ユーザーの操作を無効化（オプション）
    freeMode: false, // 慣性スクロールを無効化（一定速度にする）
    breakpoints: {
      // 0〜767pxまでは1枚表示にする
      0: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // // 768px以上は2枚表示
      // 768: {
      //   slidesPerView: 2,
      //   spaceBetween: 30,
      // },
      // 1024px以上は3枚表示（デフォルト）
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });
});
