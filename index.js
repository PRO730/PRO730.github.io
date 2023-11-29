function showHomepage() {
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "none";
  document.getElementById("Home").style.display = "block";
}

function showSkillspage() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "none";
  document.getElementById("Skills").style.display = "block";
}

function showProjectpage() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Languages").style.display = "none";
  document.getElementById("Projects").style.display = "block";
}

function showLanguagespage() {
  document.getElementById("Home").style.display = "none";
  document.getElementById("Skills").style.display = "none";
  document.getElementById("Projects").style.display = "none";
  document.getElementById("Languages").style.display = "block";
}

showHomepage();
// showSkillspage();

var homelink = document.querySelectorAll("#top-menu-bar a")[0];
homelink.addEventListener("click", showHomepage);

var projectlink = document.querySelectorAll("#top-menu-bar a")[2];
projectlink.addEventListener("click", showProjectpage);

var Languageslink = document.querySelectorAll("#top-menu-bar a")[3];
Languageslink.addEventListener("click", showLanguagespage);
