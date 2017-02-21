var damont = {name: "Damont", subject: "English", age: 29, gender: "male"};
var trixie = {name: "Trixie", subject: "math", age: 54, gender: "female"};
var teacherArray = [damont, trixie];
var school = {studentPop: 600, teacherPop: teacherArray.length, teachers: teacherArray};

school.addTeacher = function (name, subject, age, gender) {
  this.teachers.push(name = {name: name, subject: subject, age: age, gender: gender});
};

school.updateTeacherPop = function () {
  this.teacherPop = this.teachers.length;
};

school.addTeacher("Steve", "pyschology", 39, "male");
school.addTeacher("Bethany", "physical education", 32);

console.log("number of teachers is " + school.teacherPop);

school.updateTeacherPop();

console.log("ran updateTeacherPop()");

console.log("number of teachers is " + school.teacherPop);

for (var key in school) {
  console.log(key);
}

var pronoun = function (gender) {
  if (gender == "male") {
    return "He";
  } else if (gender == "female") {
    return "She";
  } else {
    return "They";
  }
};
var verbAgreement = function (noun, verb) {
  if (noun == "They" || noun == "I" || noun.charAt(noun.length-1) === "s") {
    return verb;
  } else {
    if (verb.charAt(verb.length-1) === "h") {
      return verb + "es";
    } else {
      return verb + "s";
    }
  }
};

for (var i in school.teachers) {
  var teacherPronoun = pronoun(school.teachers[i].gender);
  console.log("There is a teacher here named " + school.teachers[i].name);
  console.log(teacherPronoun + " " + verbAgreement(teacherPronoun, "teach") + " " + school.teachers[i].subject);
}

console.log("Everyone " + verbAgreement("Everyone", "love") + " a teacher");
