var header = document.getElementById("header");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
  }
});

function url() {
  fbq("track", "Purchase");
  fbq("track", "SubmitApplication");
  location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
}

var closeBtn = document.getElementById("close-btn");
var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

$(document).ready(function () {
  function coinapi() {
    $.ajax({
      type: "GET", // Use GET method for fetching data
      dataType: "json",
      url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,DOGE,ADA,BNB,SOL,BCH&tsyms=USD",
      success: function (data) {
        $bitcointPrice = data.DISPLAY.BTC.USD.PRICE;
        $bitcointpercent = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
        // console.log("BitCoin:", data);

        $("#btc").html(data.DISPLAY.BTC.USD.PRICE);
        $("#eth").html(data.DISPLAY.ETH.USD.PRICE);
        $("#xrp").html(data.DISPLAY.XRP.USD.PRICE);
        $("#nbn").html(data.DISPLAY.BNB.USD.PRICE);
        $("#sol").html(data.DISPLAY.SOL.USD.PRICE);
      },
      error: function (status, error) {
        console.error("AJAX request failed:", status, error);
      },
    });
  }
  coinapi();
  setInterval(() => {
    coinapi();
  }, 10000);
});

// Qr
var qr = document.getElementById("qr");
let isBox = false;
function closeQr() {
  qr.style.display = "none";
}

function showQr() {
  qr.style.display = "block";
}

document.getElementById("close-qr").addEventListener("click", closeQr);

document.getElementById("show-qr").addEventListener("click", showQr);

document.getElementById("show-qr2").addEventListener("click", showQr);

document.getElementById("qr-box").addEventListener("click", function () {
  isBox = true;
});

qr.addEventListener("click", function () {
  if (!isBox) {
    closeQr();
  } else {
    isBox = false;
  }
});

let isdark = true;
const body = document.getElementById("body");
const matching = document.getElementById("matching");
const mode = document.getElementById("mode");
const modeIcon = document.getElementById("mode-icon");

const modeColor = document.querySelectorAll(".mode-color");

mode.addEventListener("click", () => {
  isdark = !isdark;
  if (!isdark) {
    matching.style.cssText = "background: #18181b; color: white;";
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");

    for (let i = 0; i < modeColor.length; i++) {
      modeColor[i].classList.remove("bg-whtie");
      modeColor[i].classList.add("bg-black");
      modeColor[i].classList.remove("text-black");
      modeColor[i].classList.add("text-white");
    }
  } else {
    matching.style.cssText = "background: #f9fafb; color: black;";
    modeIcon.classList.add("fa-moon");
    modeIcon.classList.remove("fa-sun");
    for (let i = 0; i < modeColor.length; i++) {
      modeColor[i].classList.add("bg-whtie");
      modeColor[i].classList.remove("bg-black");
      modeColor[i].classList.add("text-black");
      modeColor[i].classList.remove("text-white");
    }
  }
});
