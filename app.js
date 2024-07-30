function makeSlideshow(sliderSelector) {
  const testimonialItemsContainer = document.querySelector(sliderSelector + ' .testimonial-items');
  const indicatorsContainer = document.querySelector(sliderSelector + ' .item-links');
  const customerTestimonials = [
    {
      name: "Alice Johnson",
      image: "assets/img/customer.svg",
      location: "New York, USA",
      rate: "5.0",
      description:
        "Absolutely fantastic service! It exceeded all my expectations and has been flawless so far. Highly recommend!",
    },
    {
      name: "Alice Johnson",
      image: "assets/img/customer.svg",
      location: "New York, USA",
      rate: "5.0",
      description:
        "Absolutely fantastic service! It exceeded all my expectations and has been flawless so far. Highly recommend!",
    },
    {
      name: "Alice Johnson",
      image: "assets/img/customer.svg",
      location: "New York, USA",
      rate: "5.0",
      description:
        "Absolutely fantastic service! It exceeded all my expectations and has been flawless so far. Highly recommend!",
    },
    {
      name: "Alice Johnson",
      image: "assets/img/customer.svg",
      location: "New York, USA",
      rate: "5.0",
      description:
        "Absolutely fantastic service! It exceeded all my expectations and has been flawless so far. Highly recommend!",
    },
  ];

  customerTestimonials.forEach((testimonial, index) => {
    let testimonialItemElement = document.createElement("div");
    testimonialItemElement.className = `testimonial-item ${index === 0 ? "selected" : ""}`;
    testimonialItemElement.innerHTML = `
      <div class="person-info-rating">
        <div class="person-info">
          <div class="person-icon-ctr">
            <img src="${testimonial.image}" />
          </div>
          <div class="person-info-text">
            <p class="person-name">${testimonial.name}</p>
            <p class="person-location">${testimonial.location}</p>
          </div>
        </div>
        <div class="person-rating">
          <p>${testimonial.rate}</p>
          <div class="rating-icon-ctr">
            <img src="assets/img/rate.svg" />
          </div>
        </div>
      </div>
      <div class="person-testimonial">
        <p>"${testimonial.description}"</p>
      </div>
    `;
    testimonialItemsContainer.appendChild(testimonialItemElement);

    let indicatorElement = document.createElement("div");
    indicatorElement.className = `item-link ${index === 0 ? "selected" : ""}`;
    indicatorsContainer.appendChild(indicatorElement);
  });

  let testimonialItems = testimonialItemsContainer.querySelectorAll(".testimonial-item");
  let indicatorItems = indicatorsContainer.querySelectorAll(".item-link");
  let currentTestimonialIndex = 0;

  function setCurrentTestimonial(index) {
    testimonialItems[currentTestimonialIndex].classList.remove("selected");
    indicatorItems[currentTestimonialIndex].classList.remove("selected");

    currentTestimonialIndex = index;

    let currentTestimonialItem = testimonialItems[currentTestimonialIndex];
    currentTestimonialItem.classList.add("selected");

    testimonialItemsContainer.scrollBy(
      currentTestimonialItem.offsetLeft -
        testimonialItemsContainer.offsetLeft -
        testimonialItemsContainer.scrollLeft,
      0
    );

    indicatorItems[currentTestimonialIndex].classList.add("selected");
  }

  indicatorItems.forEach((indicatorItem, i) => {
    indicatorItem.onclick = () => setCurrentTestimonial(i);
  });

  document.querySelector(sliderSelector + ' .slider-btn.right').onclick = () => {
    let nextTestimonialIndex = currentTestimonialIndex === testimonialItems.length - 1 ? 0 : currentTestimonialIndex + 1;
    setCurrentTestimonial(nextTestimonialIndex);
  };

  document.querySelector(sliderSelector + ' .slider-btn.left').onclick = () => {
    let previousTestimonialIndex = currentTestimonialIndex === 0 ? testimonialItems.length - 1 : currentTestimonialIndex - 1;
    setCurrentTestimonial(previousTestimonialIndex);
  };
  // tự động next sau 5s
  setInterval(() => {
    let nextTestimonialIndex = currentTestimonialIndex === testimonialItems.length - 1 ? 0 : currentTestimonialIndex + 1;
    setCurrentTestimonial(nextTestimonialIndex);
  }, 5000);
}

makeSlideshow('.slider-1');

document.addEventListener('DOMContentLoaded', function() {
  const navTogglerBtn = document.getElementById('nav-toggler-btn');
  const loginTogglerBtn = document.getElementById('login-toggler-btn');
  const nav = document.querySelector('nav');
  const headerSignBtns = document.querySelector('.header-sign-btns');

  navTogglerBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    headerSignBtns.classList.remove('active');
  });

  loginTogglerBtn.addEventListener('click', function() {
    headerSignBtns.classList.toggle('active');
    nav.classList.remove('active');
  });

  // Đóng menu khi click vào liên kết
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      headerSignBtns.classList.remove('active');
    });
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener('click', function(event) {
    if (!event.target.closest('header')) {
      nav.classList.remove('active');
      headerSignBtns.classList.remove('active');
    }
  });
});
