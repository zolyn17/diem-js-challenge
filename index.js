"Use strict";

var id ="";
var nameCheck = 0;
var ageCheck = 0;
function myFunction() {
    var x = document.getElementById("nameOutput");
    if (nameCheck == 0)
    {
      x.innerText = "Hello there! What's your name?\n"
    }

}    
function myFunction2() {
  var x = document.getElementById("nameOutput");
  var name = document.getElementById("name")
  if (name.value === ""){
    x.innerText = "Please enter your name!\n"
  }
  else{
    x.innerText = "Hi, " + name.value + "!\n"
    nameCheck = 1;
  }
}

function myFunction3() {
  var x = document.getElementById("birthdayOutput");
  var date = document.getElementById("date")
  if (ageCheck == 0)
    {
      x.innerText = "Lemme guess, your age is..."

    }
  }

function getAge() 
{   
var x = document.getElementById("birthdayOutput")
var inputdate = document.getElementById("date").value
var today = new Date();
var birthDate = new Date(inputdate);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (inputdate === ""){
  x.innerText = 'Would you mind entering your birthday?'
}else{
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
{
    age--;
}
if (age<0){
  x.innerText = "Please enter a valid birthdate!\n"
}
else{
  x.innerText = "Your age is " + age + " years old!\n"
}
// x.innerText = "Your age is " + age + " years old!\n"
// // x.innerText = birthDate
ageCheck = 1;
}
}

function myFunction7() {
  var x = document.getElementById("themeOutput");
  var theme = document.getElementById("theme");
  x.innerText = "You chose Light Mode!";
  theme.className = "panel bg-light"
}

function myFunction6() {
  var x = document.getElementById("themeOutput");
  var theme = document.getElementById("theme");
  x.innerText = "You chose Dark Mode!";
  theme.className = "panel bg-dark text-white"

}



function output(word) {
    var output = document.createElement("span");
    output.innerHTML = `<button onmouseout= "mouseout(this.id)" onmouseover = "mouseon(this.id)" type="button" style = "margin-left :5px" class="btn btn-success btn-sm" onclick="revert(this.id), delete_right(this.id)" value = "${word}" id="${word+1}">${word}</button>`; 
   

    document.getElementById("skillsOutput").appendChild(output);

}

function mouseon(id)
{
    var id =  document.getElementById(id)
    id.className = "btn btn-danger btn-sm";
}


function mouseout(id)
{
    var id =  document.getElementById(id)
    id.className = "btn btn-success btn-sm";
}

function revert(id) {

    var id =  document.getElementById(id)
    var word = id.value;

    var output = document.createElement("span");
    output.innerHTML = `<button onmouseout= "mouseout(this.id)" onmouseover = "mouseon(this.id)" type="button" style = "margin-left :5px" class="btn btn-success btn-sm" onclick="skills_id(this.id)" value = "${word}" id="${word}">${word}</button>`; 
    document.getElementById("skills").appendChild(output);

}
function delete_right(id) {
    var id =  document.getElementById(id)
    id.parentNode.removeChild(id);


}
function skills_id(id) {
    var id =  document.getElementById(id)
    id.parentNode.removeChild(id);
    var word = id.value;

    output(word);
}

