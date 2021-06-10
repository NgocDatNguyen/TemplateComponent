$(document).ready(function () {
  var swiper = new Swiper('.box-category[data-layout="6"] .box-swiper', {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.box[data-layout="31"] .box-swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.box-category[data-layout="11"] ', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  var swiper = new Swiper('.box[data-layout="preview"] .mySwiper', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


  var swiper = new Swiper('.box-header[data-layout="preview"] .mySwiper', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  var swiper = new Swiper('.box-footer[data-layout="preview"] .mySwiper', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  var swiper = new Swiper('.box[data-layout="43"] .mySwiper', {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper('.box[data-layout="45"] .box-swiper', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.box[data-layout="53"] .box-swiper', {
    spaceBetween: 12,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper('.box[data-layout="57"] .box-swiper', {
    spaceBetween: 16,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".btn-cliboard")
    .unbind("click")
    .click(function (e) {
      e.preventDefault();

      let value = $(this).siblings(".content").find(".prettyprint").html();

      value = value.replaceAll("<code>", "");
      value = value.replaceAll("</code>", "");
      value = value.replaceAll("&amp;", "&");
      value = value.replaceAll("&lt;", "<");
      value = value.replaceAll("&gt;", ">");

      copyStringToClipboard(value);
    });
});

function copyStringToClipboard(string) {
  let textarea;
  let result;

  try {
    textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", true);
    textarea.setAttribute("contenteditable", true);
    textarea.style.position = "fixed"; // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = string;

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    const range = document.createRange();
    range.selectNodeContents(textarea);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    textarea.setSelectionRange(0, textarea.value.length);
    result = document.execCommand("copy");
  } catch (err) {
    console.error(err);
    result = null;
  } finally {
    document.body.removeChild(textarea);
  }

  // manual copy fallback using prompt
  if (!result) {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const copyHotkey = isMac ? "⌘C" : "CTRL+C";
    result = prompt("Press ${copyHotkey}", string); // eslint-disable-line no-alert
    if (!result) {
      return false;
    }
  }
  return true;
}
