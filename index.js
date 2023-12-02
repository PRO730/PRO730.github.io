function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showHomepage() {
  hide("Skills");
  hide("Projects");
  hide("Languages");
  document.getElementById("Home").style.display = "block";
}

function showSkillspage() {
  hide("Home");
  hide("Projects");
  hide("Languages");
  document.getElementById("Skills").style.display = "block";
}

function showProjectpage() {
  hide("Home");
  hide("Skills");
  hide("Languages");
  document.getElementById("Projects").style.display = "block";
}

function showLanguagespage() {
  hide("Home");
  hide("Skills");
  hide("Projects");
  document.getElementById("Languages").style.display = "block";
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
