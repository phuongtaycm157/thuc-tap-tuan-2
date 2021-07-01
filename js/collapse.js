window.onload = () => {
  let w = window.innerWidth;
  let phoneIcon = document.getElementById("phoneIcon");
  let openIcon = document.getElementById("openIcon");
  let closeIcon = document.getElementById("closeIcon");

  // if (w < 992) {
  closeIcon.style.display = "none";
  let collapseButton = document.getElementById("collapseButton");
  collapseButton.addEventListener("click", switchState);
  // }
};
const switchState = () => {
  if (collapseButton.ariaExpanded === "true") {
    phoneIcon.style.display = "inline";
    openIcon.style.display = "inline";
    closeIcon.style.display = "none";
  } else {
    phoneIcon.style.display = "none";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};
