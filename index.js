var activepage = "Home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showpage(id) {
  hide(activepage);
  show(id);
  activepage = id;
}

showpage(activepage);

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  console.info("click on menu-bar", id);
  showpage(id);
});
