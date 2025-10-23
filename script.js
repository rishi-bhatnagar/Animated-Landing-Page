// Hero & Gallery Reveal
const revealElements = document.querySelectorAll(".feature-card");
const sectionTitles = document.querySelectorAll(".features h2, .gallery h2");
const galleryImages = document.querySelectorAll('.gallery img');

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Reveal feature cards
  revealElements.forEach((el,index)=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.style.transition = `opacity 1s ${index*0.2}s, transform 1s ${index*0.2}s`;
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }
  });

  // Reveal section headings
  sectionTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      title.classList.add('scroll-reveal');
    }
  });

  // Gallery parallax
  galleryImages.forEach((img, index) => {
    const rect = img.getBoundingClientRect();
    if(rect.top < window.innerHeight) {
      const offset = (window.innerHeight - rect.top) * 0.1;
      img.style.transform = `translateY(${-offset}px)`;
      img.style.opacity = 1;
    }
  });

  // Hero parallax
  const hero = document.querySelector('.hero');
  const heroVideo = document.querySelector('.hero-video');
  const heroContent = document.querySelector('.hero-content');
  heroVideo.style.transform = `translateY(${scrollY * 0.3}px)`;
  heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;

  // ScrollSpy
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.navbar a');
  let scrollPos = scrollY + 100;
  sections.forEach(section => {
    if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight){
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === section.id){
          link.classList.add('active');
        }
      });
    }
  });
});

// Engine Sound
const revButton = document.querySelector(".rev-btn");
const stopButton = document.querySelector(".stop-btn");
const engineSound = document.getElementById("engineSound");

revButton.addEventListener("click",(e)=>{
  e.preventDefault();
  engineSound.currentTime=0;
  engineSound.play();
  revButton.classList.add('playing');
});

stopButton.addEventListener("click",(e)=>{
  e.preventDefault();
  engineSound.pause();
  engineSound.currentTime=0;
  revButton.classList.remove('playing');
});

// Engine button pulse animation
revButton.classList.add('playing');
revButton.addEventListener('ended', ()=> revButton.classList.remove('playing'));

// Fade Gallery
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Next and Prev
document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto play every 4s
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Smooth scrolling
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if(targetEl){
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Gallery Slider
const track = document.querySelector(".gallery-track");

function updateGallery() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// Next & Prev buttons
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateGallery();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateGallery();
});


// Reveal specs cards on scroll
const specCards = document.querySelectorAll(".spec-card");
window.addEventListener("scroll", () => {
  specCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.transition = `opacity 1s ${index * 0.2}s, transform 1s ${index * 0.2}s`;
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// Auto Reviews Slider
const reviews = document.querySelectorAll(".review");
let currentReview = 0;
setInterval(() => {
  reviews[currentReview].classList.remove("active");
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add("active");
}, 5000);


// Reveal CTA section on scroll
const ctaSection = document.querySelector(".cta");
window.addEventListener("scroll", () => {
  const rect = ctaSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    ctaSection.style.transition = "opacity 1.2s ease";
    ctaSection.style.opacity = 1;
  }
});
ctaSection.style.opacity = 0;
