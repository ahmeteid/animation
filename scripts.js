let menuIcons = document.querySelector(".menuIcon");

menuIcons.onclick = function () {
  const activeClass = "menuIcon--isActive";
  const isActive = menuIcons.classList.contains(activeClass);
  if (isActive) {
    menuIcons.classList.remove(activeClass);
  } else {
    menuIcons.classList.add(activeClass);
  }
};
