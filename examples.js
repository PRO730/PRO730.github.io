function variablesExample() {
  console.log(true);
  console.info("page loaded");
  console.debug(5 - 3);
  console.warn(10 / 2);
  console.error("Hello " + "there");

  var age = 21 + 2;
  var employed = true;
  var name = "Pro";
  console.info("I'm employed", employed, typeof employed);
  console.info("age", age, typeof age);
  console.info("My name is", name, typeof name);
  console.warn("My name is", name, typeof name);

  age = 25;
  console.info("age", age, typeof age);

  age = "18";
  console.info("age", age, typeof age);

  var skills = ["HTML", "CSS", "JS"];
  console.debug(skills, typeof skills);

  var person = {
    employed: true,
    age: 25,
    fruit: "banana",
  };
  console.info(person, typeof person);
}

function updatetitle(title) {
  var jobtitle = document.getElementById("job-title");

  console.info(jobtitle, typeof jobtitle);

  console.info(jobtitle.innerHTML);
  jobtitle.innerHTML = title;
  console.info(jobtitle.innerHTML);
}

function jsonwithfunctions() {
  console.log(typeof variablesExample);
  console.log(typeof document);
  console.log(typeof document.getElementById);

  var person = {
    age: 29,
    name: "Pro",
    learn: function () {
      console.info("I'm learning js, I love it!");
    },
    play: function () {
      console.info("I'm playing. My name is ", this.name);
    },
  };

  person.learn();
  person.play();
  var action = "learn"; // learn
  person[action]();
}

// variablesExample();

updatetitle("Web Developer");

jsonwithfunctions();
