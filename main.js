var form = document.createElement('FORM');

form.setAttribute('name', 'login');
form.setAttribute('action', 'https://www.google.com.ua/');

var input1 = document.createElement('INPUT');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'age');
input1.setAttribute('placeholder', 'age - contains only numbers')
form.appendChild(input1);

var input2 = document.createElement('INPUT');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'username');
input2.setAttribute('placeholder', 'username - start from "user_"')
form.appendChild(input2);

var input3 = document.createElement('INPUT');
input3.setAttribute('type', 'text');
input3.setAttribute('name', 'date');
input3.setAttribute('placeholder', 'date - dd/mm/yyyy');
form.appendChild(input3);

var input4 = document.createElement('INPUT');
input4.setAttribute('type', 'submit');
input4.setAttribute('value', 'Validate Me');
form.appendChild(input4);

document.body.appendChild(form);


var submit = document.querySelector('input[type="submit"]');
submit.addEventListener('mousedown', validationMe);

// var date = document.querySelector('input[name="date"]');
// date.addEventListener('click', function(){
//     date.setAttribute('value', moment().format("DD/MM/YYYY"))});

function validationMe(){
	var age = document.querySelector('input[name="age"]');
	var ageValue = age.value;
	var username = document.querySelector('input[name="username"]');
	var usernameValue = username.value;
  var date = document.querySelector('input[name="date"]');
  var dateValue = date.value;


    if (!Number.isInteger(Number(ageValue)) || Number(ageValue) <0 || ageValue.match(' ') || ageValue.length < 1 || ageValue.match('e')){alert('your data is invalid (age)')};
	if (!usernameValue.startsWith("user_")){alert('your data is invalid (username)')}
	if (!checkDateFormat(dateValue) || !checkCurrentDate(dateValue)){alert('your data is invalid (date)')}
    return false
}

function checkDateFormat(dv){
  var dateFormat = /^\d{1,2}\/\d{1,2}\/\d{4}$/ ;
if(!dateFormat.test(dv)){
  return false
};
return true
}

function checkCurrentDate (dv) {
  var arr = dv.split('/');
  var currentDate = new Date();
  if(currentDate.getDate() != parseInt(arr[0])){
    return false;
  };
  if(currentDate.getMonth() + 1 != parseInt(arr[1])){
    return false;
  };
  if(currentDate.getFullYear() != parseInt(arr[2])){
    return false;
  };
  return true;
};
