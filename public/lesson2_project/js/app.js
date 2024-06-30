window.onload = function() {

var avengers = ['Thor', 'Wasp', 'Captain America', 'Iron Man', 'Hulk','Vision', 'Hank Pym', 'Black Panther', 'Quicksilver', 'Mantis', 'Spiderman']; //creates the avengers array
avengers.pop() //removes last element(spiderman)
avengers.push('Black Widow') //adds black widow
avengers.splice(2, 6, 'Nebula', 'Moondragon') //adds nebula and moondragon, gets rid of 6 elements
var justiceLeague = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Green Lantern', 'Aquaman']; //creates justiceLeague array
var result = avengers.concat(justiceLeague); //combines arrays
result.sort(); //sorts by alphabetical order
result.reverse(); //reverses the order
document.getElementById('allTheKids').innerHTML = result.join("<br>")
}