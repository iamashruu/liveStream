window.onload = function () {
  const overlay = document.querySelector(".overlay");
  const countdown = document.querySelector(".countdown");
  const videoFrame = document.getElementById("video-frame");
  const unblurTime = 5; // seconds
  let remainingTime = unblurTime;

  // Blur the video and start countdown
  overlay.style.opacity = 1;
  countdown.innerText = remainingTime;
  const intervalId = setInterval(() => {
    remainingTime--;
    countdown.innerText = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      overlay.style.opacity = 0;
      countdown.remove();
      videoFrame.style.filter = "unset";
    }
  }, 1000);
};
