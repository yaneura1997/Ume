const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".hamburger-menu");

if (hamburger && menu) {

  hamburger.addEventListener("click", () => {

    menu.classList.toggle("is-open");

  });

}


/* ========================================
   Lyrics
======================================== */

document.querySelectorAll(".track-title").forEach(title => {

  title.addEventListener("click", (e) => {

    e.stopPropagation();

    // 他の歌詞を閉じる
    document.querySelectorAll(".track-title.is-open").forEach(openTitle => {

      if (openTitle !== title) {
        openTitle.classList.remove("is-open");
      }

    });

    // タップした曲の歌詞を開閉
    title.classList.toggle("is-open");

  });

});