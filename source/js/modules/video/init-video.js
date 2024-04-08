const aboutButton = document.querySelector('.about__button');
const aboutVideo = document.querySelector('.about__video');

aboutButton.addEventListener('click', () => {
  const videoIframe = document.createElement('iframe');
  videoIframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=4BlOWTVRXxsMGFVW');
  videoIframe.setAttribute('allowfullscreen', '');
  videoIframe.setAttribute('frameborder', '0');
  videoIframe.src += '&autoplay=1';
  aboutVideo.appendChild(videoIframe);
});
