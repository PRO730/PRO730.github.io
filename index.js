function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomepage() {
  hide("Skills");
  hide("Projects");
  hide("Languages");
  show("Home");
}

function showSkillspage() {
  hide("Home");
  hide("Projects");
  hide("Languages");
  show("Skills");
}

function showProjectpage() {
  hide("Home");
  hide("Skills");
  hide("Languages");
  show("Projects");
}

function showLanguagespage() {
  hide("Home");
  hide("Skills");
  hide("Projects");
  show("Languages");
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
