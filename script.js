// Navbar

const menu = document.querySelector(".menu");
const navabr = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navabr.classList.toggle("change");
  menu.classList.toggle("change");
});
// End of Navbar

// Section 2 Video

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
  }
}

btn.addEventListener('click', () => {
  playPause()
})

// End of Section 2 Video