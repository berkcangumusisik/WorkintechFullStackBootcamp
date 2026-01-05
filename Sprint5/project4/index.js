// Kodlar Buraya
const mainImage = document.getElementById('main-image');

const thumbnails = document.querySelectorAll('.main-navigation img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseenter', (event) => {
    mainImage.src = event.target.src;
  });
});
