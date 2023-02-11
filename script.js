function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("party");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("party")) {
    img.setAttribute("src", "./assets/party-profile.png");
    img.setAttribute("alt", "Party");
  } else {
    img.setAttribute("src", "./assets/vinil-profile.png");
    img.setAttribute("alt", "Vinil");
  }
  
  const videoElement = document.querySelector("#video-container video");
  const source = videoElement.querySelector("source");

  if (videoElement.classList.contains("vinil")) {
    source.setAttribute("src", "./assets/party.mp4");
    videoElement.classList.remove("vinil");
    videoElement.classList.add("party");
    videoElement.poster = "./assets/party.jpg";
  }
  else {
    source.setAttribute("src", "./assets/vinil.mp4");
    videoElement.classList.remove("party");
    videoElement.classList.add("vinil");
    videoElement.poster = "./assets/vinil.jpg";

  }
  videoElement.load();

  const animations = document.querySelectorAll(".animation");
  for (const animation of animations) {
    animation.classList.toggle("party-border");
  }

}

/* Doesn't work */

/*
function switchVideo() {
  const videoElement = document.querySelector("#video-container");
  const source = videoElement.querySelector("source");
  const viewportWidth = window.innerWidth;
  
  if (viewportWidth < 768) {
    if (videoElement.classList.contains("vinil")) {
      source.setAttribute("src", "./assets/bg-mobile-vinil.mp4");
      videoElement.classList.remove("vinil");
      videoElement.classList.add("bg-mobile-vinil");
    } else {
      source.setAttribute("src", "./assets/bg-mobile-party.mp4");
      videoElement.classList.remove("party");
      videoElement.classList.add("bg-mobile-party");
    }
  } else {
    if (videoElement.classList.contains("bg-mobile-party")) {
      source.setAttribute("src", "./assets/party.mp4");
      videoElement.classList.remove("bg-mobile-party");
      videoElement.classList.add("party");
    } else {
      source.setAttribute("src", "./assets/vinil.mp4");
      videoElement.classList.remove("bg-mobile-vinil");
      videoElement.classList.add("vinil");
    }
  }
  // for some browsers
  if (videoElement.readyState) {
    videoElement.currentTime = 0;
    videoElement.load();
  }
  // for others
  else {
    videoElement.src = videoElement.src;
  }
}

const switchButton = document.querySelector("#switch");
switchButton.addEventListener("click", toggleMode);

switchVideo();
window.addEventListener("resize", switchVideo);
*/