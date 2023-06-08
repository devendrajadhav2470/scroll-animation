document.addEventListener("scroll", handlescroll);
function handlescroll() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  const boxes = document.getElementsByClassName("box");
  for (const box of boxes) {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop > triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  }
}
