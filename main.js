var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow(){

var AddRown = document.getElementById('show');
var NewRow = AddRown.insertRow(n);

list1[x] = document.getElementById("fname").value;
list2[x] = document.getElementById("lname").value;
list3[x] = document.getElementById("email").value;
list4[x] = document.getElementById("pwd").value;

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);

cel1.innerHTML = list1[x];
cel2.innerHTML = list2[x];
cel3.innerHTML = list3[x];
cel4.innerHTML = list4[x];

n++;
x++;
}

var openlink = document.querySelector(".open-form");
var closelink = document.querySelector(".close-form");
var form = document.querySelector("form.mainform");
var phoneLogin = form.querySelector(".inp-phone");
var mailLogin = form.querySelector(".inp-mail");
var phoneStorage = localStorage.getItem("phoneLogin");

openlink.addEventListener("click", function(event){
  event.preventDefault();
	form.classList.toggle("mainform-show");
  if( form.classList.contains("login-popup-error") ){
     	form.classList.remove("login-popup-error");
     };
  if(phoneStorage){
    phoneLogin.value = phoneStorage;
    mailLogin.focus();
  }else {
    phoneLogin.focus();
  }
});

closelink.addEventListener("click", function(event){
  event.preventDefault();
  form.classList.remove("mainform-show");
});

form.addEventListener("submit", function(event){
  if(form.classList.contains("login-popup-error")){
    form.classList.remove("login-popup-error");
  }
  if( !phoneLogin.value || !mailLogin.value){
    event.preventDefault();
    form.classList.add("login-popup-error");
  }else {
    localStorage.setItem("phoneLogin", phoneLogin.value);
  };
});
