const initSlider = () => {
  const cardList1 = document.querySelector(".slider_wrapper1 .card_slider1");
  const cardList2 = document.querySelector(".slider_wrapper2 .card_slider2");
  const cardList3 = document.querySelector(".card_slider3");
  const slideButtons1 = document.querySelectorAll(".slider_wrapper1 .slide-button");
  const slideButtons2 = document.querySelectorAll(".slider_wrapper2 .slide-button");
  const slideButtons3 = document.querySelectorAll(".slide-button");

  slideButtons1.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide1" ? -1 : 1;
      const scrollAmount = cardList1.clientWidth * direction;
      cardList1.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  slideButtons2.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide2" ? -1 : 1;
      const scrollAmount = cardList2.clientWidth * direction;
      cardList2.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  slideButtons3.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide3" ? -1 : 1;
      const scrollAmount = cardList3.clientWidth * direction;
      cardList3.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
}

var gifImages = document.querySelectorAll('.gif_image');
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (windowWidth <= 1300) {
  for (var i = 0; i < gifImages.length; i++) {
    gifImages[i].src = '';
  }
}

window.addEventListener("load", initSlider);
