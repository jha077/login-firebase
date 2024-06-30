window.onload = function() {




//Example:
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
    var boxChoc = 6;
  return boxChoc * 500;}
  
  example.textContent = "There are a total of " + getChoc() + " pieces of chocolate.";
  
  //1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?
  function ferrisWheel() {
    var seats = 14; //sets how many seats the ferris wheel has
    var people = 6; //how many people per seat
    var totalpeople = seats * people //multiplies them
    return totalpeople //returns the answer
  }
  prob1.textContent = "There are a total of " + ferrisWheel() + " that can ride the ferris wheel at once." //brings the output to the hyml

  //2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?
  function garden() {
    var rows = 52; //#of rows on the garden
    var column = 15; //# of columns
    var plot = rows * column; //establishes the size of the plot = how many bean plants can be planted
   return plot
  }
  prob2.textContent = "There are a total of " + garden() + " bean plants that can be planted."
  //3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?
  function comic() {
var frames = 143; //total frames 
var perpage = 11; //11 per page
var totalpages = frames / perpage; // finds how many pages there will be 
 return totalpages
  }
  prob3.textContent = "Julian would need a total of " + comic() + "pages to have exactly 11 frames per page."
  //4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?
  function shirt() {
var cotton = 4; //4 feet of cotton per shirt
var shirt = 60; //60 feet total cotton
var totalshirts = shirt / cotton; //finds how many shirts can be made
return totalshirts

  }
  prob4.textContent = "Out of 60 feet of cotton you can make " + shirt() + " shirts."

  //5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?
  function tshirt() {
var profit = 9; //profit of $9 per shirt
var sold = 200; //they sell 200
var totalprofit = profit * sold; // total profit
return totalprofit
  }
  prob5.textContent = "They made a total of $" + tshirt() + " selling shirts at the games."
  
  //6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?
  function guests() {
    var guests = 248; //248 guests total
var tables = 4; //4 per table
var totaltables = guests / tables //finds the total amount of tables needed for the 248 guests
return totaltables 
  }
  /* This starts the candles function to determine the amount of candles needed*/ function candles() { 
    var candles = 2; //2 candles per table
var totalcandles = candles * 62 //multiples total table(62) by 2 for the total amount of candles.
return totalcandles
  }
  prob6.textContent = "Warren will need a total of " + guests() + " tables As well as " + candles() + " candles to have 2 per table."
  
  //7. Beth has 4 packs of Crayons. Each pack has 10 crayons in it. She also has 6 extra Crayons. How many Crayons does Beth have altogether?

function beth() {
var packs = 4; // beth has 4 packs
var crayonsper = 10; //crayons per pack
var extra = 6; //represents the 6 extra crayons
var totalcrayons = packs * crayonsper + extra
return totalcrayons
}
prob7.textContent = "Beth has a total of " + beth() + " crayons."
}