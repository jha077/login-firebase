document.addEventListener('DOMContentLoaded', function() {

document.getElementById('buttonclicked').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('onkeydown').addEventListener('keydown', function(event) {
alert("Pressed keydown")
});

document.getElementById('mouseover').addEventListener('mouseover', function() {

this.blur();

});

var box = document.getElementById('box');
box.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'green';
});

box.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'blue';
});


var changebg = document.getElementById('changebg');
var changebgbutton = document.getElementById('changebgbutton');
changebgbutton.addEventListener('click', function() {
changebg.style.backgroundColor = 'green';
})


var inputfield = document.getElementById('inputfield');
inputfield.addEventListener('blur' , function(){
alert('Blurred');
})



//const form = document.getElementById('myForm')
//const name = document.getElementById('fullName')
//const error = document.getElementById('error')
//form.addEventListener('submit', function (e) {
  //  let messages = [];
    //  if (name.value.trim() === '') {
      //  messages.push('Name is required');
        //document.getElementById('msgname').innerText = 'Name is required';
      //} else {
        //document.getElementById('msgname').innerText = '';
      //} 
//if (messages.length > 0) {
  //  e.preventDefault();
    //error.innerText = messages.join(', ');
  //} else {
    //error.innerText = ''; 
  //})


})