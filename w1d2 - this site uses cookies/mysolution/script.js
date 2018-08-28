document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded");

  document.querySelector(".accept").addEventListener("click", function() {
    document.querySelector("#box").style.animation = "ud 2s ease-out";
    document.querySelector("#box").style.animationFillMode = "forwards";
  });
  document.querySelector(".decline").addEventListener("click", function() {
    document.querySelector("#box").style.animation = "ud 2s ease-out";
    document.querySelector("#box").style.animationFillMode = "forwards";
  });
});
