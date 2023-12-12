var activepage = "Home";

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomepage() {
  hide(activepage);
  show("Home");
  activepage = "Home";
}

function showSkillspage() {
  hide(activepage);
  show("Skills");
  activepage = "Skills";
}

function showProjectpage() {
  hide(activepage);
  show("Projects");
  activepage = "Projects";
}

function showLanguagespage() {
  hide(activepage);
  show("Languages");
  activepage = "Languages";
}

// showHomepage();
showSkillspage();

var homelink = document.querySelectorAll("#top-menu-bar a")[0];
homelink.addEventListener("click", showHomepage);

var skillslink = document.querySelectorAll("#top-menu-bar a")[1];
skillslink.addEventListener("click", showSkillspage);

var projectlink = document.querySelectorAll("#top-menu-bar a")[2];
projectlink.addEventListener("click", showProjectpage);

var Languageslink = document.querySelectorAll("#top-menu-bar a")[3];
Languageslink.addEventListener("click", showLanguagespage);
