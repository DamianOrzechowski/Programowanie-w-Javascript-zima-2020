const images = document.querySelectorAll('.grid img')
const lightbox = document.querySelector('.lightbox')
const close = document.querySelector('#close')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')




close.addEventListener('click', hidelightbox)
function hidelightbox ()
{
    lightbox.classList.remove('visible')
}
for (let index = 0; index < images.length; index++) {
  const img = images[index]
  img.addEventListener('click', showLightbox)
}

function showLightbox (ev) {
    
    const lighboxImg = document.querySelector('.lightbox img')
    lighboxImg.src = ev.target.src
    lightbox.classList.add('visible')
  }