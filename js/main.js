
const slidesContainer = document.querySelector('.carousel-slides');
let currentIndex = 0;
const slides = document.querySelectorAll('.item');
const totalSlides = slides.length;
let slideInterval;

function moveToSlide(n) {
    slidesContainer.style.transform = 'translateX(' + (-n * 100) + '%)';
    currentIndex = n;
}

document.querySelector('.nav-prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(totalSlides - 1);
    }
});

document.querySelector('.nav-next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0);
    }
});

function startSlideInterval() {
    slideInterval = setInterval(() => {
        moveToSlide((currentIndex + 1) % totalSlides);
    }, 3000);
}

startSlideInterval();
slidesContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
slidesContainer.addEventListener('mouseleave', () => {
    startSlideInterval();
});

const slider = document.querySelector('.testimonials-slider');
const testimonials = document.querySelectorAll('.testimonial-item');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let autoSlideInterval;

testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => changeSlide(i));
});

const updateDots = (index) => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

const changeSlide = (index) => {
    clearInterval(autoSlideInterval);
    slider.scrollTo({
        left: index * slider.offsetWidth,
        behavior: 'smooth'
    });
    currentSlide = index;
    updateDots(index);
    startAutoSlide();
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        let nextSlide = currentSlide + 1 >= testimonials.length ? 0 : currentSlide + 1;
        changeSlide(nextSlide);
    }, 3000);
};

updateDots(0); 
startAutoSlide(); 




// Function to close the toggle menu
function closeMenu() {
    document.querySelector('.nav-links').classList.remove('active');
  }
  
  // Add event listener to the hamburger icon to toggle the menu
  document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Add event listeners to each section link to close the menu when clicked
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });
