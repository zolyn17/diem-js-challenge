"Use strict";

var id ="";
function myFunction() {
    var x = document.getElementById("nameOutput");
    x.innerText = "Hello there! What's your name?\n"
}
function myFunction2() {
  var x = document.getElementById("nameOutput");
  var name = document.getElementById("name")
  if (name.value === ""){
    x.innerText = "Please enter your name!\n"
  }
  else{
    x.innerText = "Hi, " + name.value + "!\n"
  }
}

function myFunction3() {
  var x = document.getElementById("birthdayOutput");
  var date = document.getElementById("date")
  x.innerText = "Lemme guess, your age is..."
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


//document.body.onload = addElement;

var skill_id = [];
var skill_number= [];
function outpu2t(word, id) {
    var output = document.createElement("BUTTON");
    output.innerHTML = `<button type="button" class="btn btn-success btn-sm" onclick="skills_id(this.id)" value = "JavaScript" id="JavaScript">JavaScript</button>`; 
    output.id = id;
    output.value = word;
    output.style = "margin-left :5px";
    output.className = "btn btn-success btn-sm";
    output.onclick = function ()
    {   var id = document.getElementById(e.target.id)
        var revertid = id.value;
        id.parentNode.removeChild(id);
        var revert = document.getElementById(revertid)

        //var parent = document.getElementById("skills")
        revert.style.visibility = "visible"


    };
    document.getElementById("skillsOutput").appendChild(output);
    // parent.removeChild(id);

}

function output(word, id) {
    var output = document.createElement("span");
    output.innerHTML = `<button onmouseout= "mouseout(this.id)" onmouseover = "mouseon(this.id)" type="button" style = "margin-left :5px" class="btn btn-success btn-sm" onclick="revert(this.id), delete_right(this.id)" value = "${word}" id="${word+1}">${word}</button>`; 
   

    document.getElementById("skillsOutput").appendChild(output);
    // parent.removeChild(id);

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
    var revert = id.value;
    var revert_id =  document.getElementById(revert)

    revert_id.style.visibility = "visible"

}
function delete_right(id) {
    var id =  document.getElementById(id)
    id.parentNode.removeChild(id);


}
function skills_id(id) {
    var id =  document.getElementById(id)
    id.style.visibility = "hidden"
    var word = id.value;

    skill_id.push(word);
    skill_number

    output(word, id);
}

