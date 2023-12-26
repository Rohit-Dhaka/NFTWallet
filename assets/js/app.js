const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
const tog = document.querySelector(".tog");
menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
    menulist.classList.toggle("active");
})
tog.addEventListener("click", () => {
    tog.classList.toggle("active");
    document.querySelector('body').classList.toggle('dark')    
})
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


