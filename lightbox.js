const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');
const lightbox = document.querySelector('.lightbox');

function openModal() {
  lightbox.classList.add('open');
}

function closeModal() {
  lightbox.classList.remove('open');
  modalOuter.classList.remove('open');
}

// Set of functions to move lightbox carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  modalOuter.classList.add('open');
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("lb-images");
  const captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Closes modal with click outside window
modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if(isOutside) {
    closeModal();
  }
});

// Set of EventListeners to enable keyboard navigation of carousel
// Enable closing with 'esc' key
window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape')  {
    closeModal();
  }
})

window.addEventListener('keydown', (event) => {
  if(event.key === 'ArrowLeft')  {
    plusSlides(-1);
  }
})

window.addEventListener('keydown', (event) => {
  if(event.key === 'ArrowRight')  {
    plusSlides(1);
  }
})
