// Chapter 21 task 1

// var firstName = prompt("Enter your first name","Enter first name...");
// var lastName = prompt("Enter your last name","Enter last name...");
// var fullName = firstName + " " +lastName;
// alert(fullName);
// Chapter 21 task 2

// var favPhone = prompt("Enter model name of your favourite phone " , "Enter model name");
// var long = favPhone.length;
// document.write("My favourite phone is: "+ favPhone + "<br>"); 
// document.write("Length of string is: "+long);

// Chapter 21 task 3
// var lett= "Pakistani";
// var ind = lett.indexOf("n");
// document.write("String: "+ lett + "<br>");
// document.write("Index of 'n': "+ind);

// Chapter 21 task 4

// var hel= "Hello World";
// var inde = hel.lastIndexOf("l");
// document.write("String: "+ hel + "<br>");
// document.write("Last Index of 'l': "+inde);

// Chapter 21 task 5
// var pak = "Pakistani";
// var chr = pak.charAt(3);
// document.write("String: " + pak + "<br>");
// document.write("Character at index 3: " + chr);

// Chapter 21 task 6
// var frstNam = prompt("Enter your first name", "Enter first name");
// var lstNam = prompt("Enter your last name", "Enter last name");
// var fullNam = frstNam.concat( " " +lstNam);
// document.write(fullNam);

// Chapter 21 task 7
//  var str1 = "Hyderabad";
//  var str2 = "Islam";
//  var str3 = "abad";
//  var finStr = str2 + str3;
//  document.write("City: " + str1 + "<br>");
//  document.write("After replacement: " + str2+str3 + "<br>");
 
// Chapter 21 task 8
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var rep = message.replace(/and/g , "&");
// document.write(rep);

// Chapter 21 task 9

// var str = "472";
// document.write("Value: "+str +"<br>");
// var a1 = typeof(str);
// document.write("Type: "+a1+"<br>");

// var str2 = "472";
// document.write("Value: "+str2 +"<br>");
// var a2 = Number(str2);
// var fin = typeof(a2);
// document.write("Type: " +fin +"<br>");

// Chapter 21 task 10

// var a = prompt("Enter your favourite fruit...", "Enter fruit here");
// var b = a.toUpperCase();
// document.write("User input: " + a +"<br>");
// document.write("Upper case: " + b +"<br>");

// Chapter 21 task 11

//  var i = prompt("Enter your favourite vegetable...", "Enter vegetable here");
//   var firstCharacter = i.slice(0, 1);
//  var otherCharacters = i.slice(1);
//  firstCharacter = firstCharacter.toUpperCase();
//  otherCharacters = otherCharacters.toLowerCase();
//  var cappedCity = firstCharacter + otherCharacters;
//  document.write("User input: " + i +"<br>");
//  document.write("Title case:" + cappedCity +"<br>");


// Chapter 21 task 12

// var num = 35.36;
// var without = num.toString().replace(".", ""); 
// document.write("Number: " +num+ "<br>");
// document.write("Result: " + without);

// Chapter 21 task 13

//  var str = prompt("Enter Username");
//  for (var i = 0; i < str.length; i++) {
//   if(str.charAt(i) === "!" || str.charAt(i) === "," || str.charAt(i) === "." || str.charAt(i) === "@"){
//   alert("Enter a valid Username!");
//   break;
//  }
//   }
 
// Chapter 21 task 14


// var A = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var c = prompt("Welcome to ABC bakery.What do you want to order Sir/Ma'am?", "Enter item name...");
// var cee = c.toLowerCase();
// if(cee === "cake"){
//   document.write(cee+ " is <b>available<b/> at index 0 in our bakery");
// }
// else if(cee === "apple pie"){
//   document.write(cee+ " is <b>available<b/> at index 1 in our bakery");
// }
// else if(cee === "cookie"){
//   document.write(cee+ " is <b>available</b> at index 2 in our bakery");
// }
// else if(cee === "chips"){
//   document.write(cee+ " is <b>available</b> at index 3 in our bakery");
// }
// else if(cee === "patties"){
//   document.write(cee+ " is <b>available</b> at index 4 in our bakery");
// }
// else{
//  document.write("We are sorry." + c +" is <b>not available<b/> in our bakery");
// }

// Chapter 21 task 15

// var pass = prompt("Enter password of your choice...","Enter password here...");
// for(var i = 0 ; i < pass.length ; i++){
//   if(charAt[0] === typeof(Number)){
//     alert("Password must not start with numbers");
//   }
//   else if(charAt[i].length< 7){
//     alert("Password must be 8 characters long");
//   }
// } 

// Chapter 21 task 16

// var university = "University of Karachi";
// var make = university.split("");
// document.write(make);

// Chapter 21  task 17

// var ent = prompt("Enter a word", "Enter a word here...");
// var disp = ent.charAt(ent.length-1);
// document.write("User input: " + ent + "<br>");
// document.write("Last character of input: "+disp);

// Chapter 21 task 18

// var string = "The quick brown fox jumps over the lazy dog";
// var count = string.find(/the/g);
// document.write(count);



//  Chapter 26 task 1

// var posInt = prompt("Enter a positive integer" , "Enter a positive number ... ");
// var now = Math.round(posInt);
// var next = Math.floor(posInt);
// var again = Math.ceil(posInt);
// document.write("Number: " + posInt  +"<br>");
// document.write("Round Off Value: " + now  +"<br>");
// document.write("Floor Value: " + next  +"<br>");
// document.write("Ceil Value: " + again  +"<br>");

//  Chapter 26 task 2

// var posInt = prompt("Enter a negative integer" , "Enter a negative number ... ");
// var now = Math.round(posInt);
// var next = Math.floor(posInt);
// var again = Math.ceil(posInt);
// document.write("Number: " + posInt  +"<br>");
// document.write("Round Off Value: " + now  +"<br>");
// document.write("Floor Value: " + next  +"<br>");
// document.write("Ceil Value: " + again  +"<br>");


//  Chapter 26 task 3

// var num = prompt("Enetr a number Negative OR Positive..." , "Enter number here...");
// var abso = Math.abs(num);
// document.write("The absolute value of " + num + " is " + abso + "<br>");


//  Chapter 26 task 4

// var ran = Math.random();
// var re = (ran * 6)+1;
// var ran1 = Math.random();
// var re1 = (ran1 * 6)+1;
// var ro1 = Math.floor(re);
// var ro2 = Math.floor(re1);
// document.write("The random value of dice is: " + ro1 + "<br>");
// document.write("The random value of dice is: " + ro2 + "<br>");

//  Chapter 26 task 5

// var ran = Math.random();

// var ran1 = Math.random();

// var ro1 = Math.round(ran);
// var ro2 = Math.round(ran1);
// document.write(ro1 + "<br>");
// document.write("The random coin value: " + "Heads" + "<br>");
// document.write(ro2 + "<br>");
// document.write("The random coin value: " + "Tails" + "<br>");


//  Chapter 26 task 6

// var num1 = Math.random();
// var impNum = (num1*99)+(num1*3);
// var neewNum = Math.floor(impNum);
// document.write("Random Number between 1 and 100: "+neewNum);

// Chapter 26 task 7

// var w = prompt("Enter your weight in kilograms," , "Enter weight here...");
// if(w === w){
//   document.write("The weight of the user is " + w + " kilograms "+  "<br>"); 
// }

// Chapter 26 task 8

// var secNum = prompt("Enter a number between 1 and 10", "Enter number here...");
// if(secNum === "5"){
//   alert("Congratulations  \n  You won!");
// }
// else if(secNum !== "5"){
//   alert("Try again!");
// }

// Chapter 31 task 1

// var newDate = new Date();
// document.write(newDate);

// Chater 31 task 2

// var monthNames = ["January", "February" , "March" , "April" , "May" , "June" , "July", "August", "September", "October", "November","December"];
// var date = new Date();
// var currentMonth = date.getMonth();
// var monthName = monthNames[currentMonth];
// document.write("Current Month: "+ monthName);

// Chapter 31 task 3

// var dayNames = ["Sun", "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var currentDay = date.getDay();
// var dayName = dayNames[currentDay];
// document.write("Today is: "+ dayName);


// Chapter 31 task 4


// var dayNames = ["Sun", "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var date = new Date();
// var currentDay = date.getDay();
// var dayName = dayNames[currentDay];
// if(dayName === "Sun" || dayName === "Sat"){
//   document.write("Its Fun Day");
// }

// Chapter 31 task 5

// var dat = new Date();
// if(dat <= "15"){
//   document.write("First fifteen days of the month");
// }
// else{
//   document.write("Last days of the month");
// }


// Chapter 31 task 6

// var date1 = new Date();
// document.write("Current Date: "+date1 + "<br>");
// var date2 = date1.getTime();
// document.write("Elaspsed Milliseconds since January 1, 1970: "+date2 +"<br>");
// var date3 = date2/(1000*60*60*442417);
// var date4 = date1.getMinutes(date3);
// document.write("Elaspsed Minutes since January 1, 1970: "+date4 +"<br>");

// Chapter 31 task 7

// var daate = new Date();
// var hrs = daate.getHours();
// if(hrs > "12"){
//   document.write("Its PM");
// }
// else{
//   document.write("Its AM");
// }

// Chapter 31 task 8

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);


// Chapter 31 task 9

// var newDa = new Date();
// var ramaDate = new Date("April 24, 2020");
// var dday = newDa.getTime();
// var nday = ramaDate.getTime();
// var diff = newDa - ramaDate;
// var ddiff = diff/(1000*60*60*24);
// ddiff = Math.floor(ddiff);
// document.write(ddiff + " days have passed since 1st Ramadan, 2020");

// Chapter 31 task 10

// var newDa = new Date();
// var ramaDate = new Date("January 1, 2020");
// var dday = newDa.getTime();
// var nday = ramaDate.getTime();
// var diff = newDa - ramaDate;

// document.write("On reference date " + newDa +"<br>");
// document.write(diff + " Seconds have passed since beginning of 2020" +"<br>");



// Chapter 31 task  11


// var dateObj = new Date();
// document.write("Curent Date: " + dateObj +"<br>");
// var newD = dateObj.setHours(-1);
// document.write(newD + new Date());


// Chapter 31 task 12

// var a = new Date();
// document.write(a +"<br>");
// var b = a.setFullYear(1920);
// document.write(b);

// Chpter 31 task 13

// var user1 = prompt("Enter your age in number format");
// var dt = new Date();
// var v1 = user1*(12*30*1000*60*60*24);
// var dob = dt+v1;
// document.write(dob);


//  Chapter 31 task 14

// document.write("<h1>K-Electric Bill</h1>" + "<br>" + "<br>");
// var naame = prompt("Enter customer name..." , "Enter your name...");
// var units = prompt("Enter number of units consumed..." , "Enter number of units...");
// document.write("Customer Name: "+ naame +"<br>");
// var mnth = ["January", "February" , "March" , "April" , "May" , "June" , "July", "August", "September", "October", "November","December"];
// var daate = new Date();
// var currntMonth = daate.getMonth();
// var mnthName = mnth[currntMonth];
// document.write("Current Month: "+ mnthName +"<br>");
// document.write("Number of units consumed: "+ units +"<br>");
// var charges = Number(16);
// document.write("Charges per unit: " +" "+ charges +"<br>");
// var mult = units * charges;
// var lps = Number(350);
// var gap = mult+lps;
// document.write("Net Amount Payable (within Due Date): " + mult +"<br>");
// document.write("Late Payment Surcharge: " + lps +"<br>");
// document.write("Gross Amount Payable(after Due Date): " + gap + "<br>");


// Chapter 35 task 1

// function date() {
//     return(new Date());
// }
// document.write(date());

// Chapter 35 task 2 

// function name(){
//     var a = prompt(" Enter first name " , "Enter your name");
//     var b = prompt(" Enter last name " , "Enter your name");
//     var c = a+" "+b;
//     return(c);
// }
// document.write("Good Morning: "+ name());

// Chapter 35 task 3

//function sum(){
//     var a = +prompt("Enter first number " , "Enter number");
//     var b = +prompt("Enter second number " , "Enter number");
//     var c = Number(a+b);
//     return(c);
// }
// document.write("The sum of both the numbers is: " + sum());

// Chapter 35 task 4

// document.write("<h1>Calculator</h1>" + "<br>" + "<br>");
// function calc(a , b ,sign){
//     var a = Number(prompt("Enter first number"));
//     var b = Number(prompt("Enter second number"));
//     var sign = prompt("Enter operator ( + , - , x , / )", "Enter any one operator");
//     if(sign === "+"){
//         return(a+b);
//     }
//     else if(sign === "-"){
//         return(a-b);
//     }
//     else if(sign === "x"){
//         return(a*b);
//     }
//  else if(sign === "/"){
//      return(a/b);
//  }
// }
// document.write("The result is:  " + calc());

// Chapter 35 task 5

// function sq(a){
//     var a = Number(5);
//     var b = a*a;
//     return(b);
// }
// document.write("Square of the argument is: " + sq());

// Chapter 35 task 6

// function fact(){
//     var d = Number(prompt("Enter a number"));
//     var  n = d * (d -(d-1)) * (d - (d-2))*1;
//     return(n);
// }
// document.write(fact());

// Chapter 35 task 7

// function count(start,end) {
//     var start = Number(prompt("Enter a number you want counting to start"));
//     var end = Number(prompt("Enter a number you want counting to end"));
//     for(var i = start; i < end; i++){
//         document.write(i + "<br>");
//     }
//     return(i);
// }
// document.write(count());

// Chapter 35 task 8

// function hypotenuse(hyp,base,perp) {
//     function square(a,b,c,d){
//         var a = Number(prompt("Enter base of right angled triangle"));
//         var b = Number(prompt("Enter perpendicular of right angled triangle"));
//         var c = Number((a*a));
//         var d = Number((b*b));
//         return(c+d);
// }

// var hyp = Number(square());
// var squrt = Math.sqrt(hyp);
// var whole = Math.floor(squrt);
// return(whole);
    
// }
// document.write(hypotenuse());

// Chapter 35 task 9

// function area(width, height){
//     var width = Number(prompt("Enter width of a rectangle: ", "Enter width..."));
//     var height = Number(prompt("Enter height of a rectangle: ", "Enter height..."));
//     return(width*height);
// }
// document.write("The area of a rectangle is: "+ area());

// Chapter 35 task 10

//  function wordCheck(word,check){
//     var word = prompt("Enter a word...","Enter word here...");
//     var check = "";
//     for(var i = word.length -1; i >= 0; i--){
//         check += word[i];
//     }
//     if(word === check){
//         document.write(word + " is a palidrome word");
//     }
//     else if(word !== check){
//         document.write(word + " is not a plaindrome word");
//     }
//     return("");
//  }
//  document.write(wordCheck());

// chapter 35 task 11

//  var i = prompt("Enter a sentence...", "Enter sentence here");
//   var firstCharacter = i.slice(0, 1);
//  var otherCharacters = i.slice(1);
//  firstCharacter = firstCharacter.toUpperCase();
//  otherCharacters = otherCharacters.toLowerCase();
//  var cappedCity = firstCharacter + otherCharacters;
//  var numChars = i.length;
//  for(var j = 0; j < numChars; j++) {
//  if(i.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
//  document.write("User input: " + i +"<br>");
//  document.write("Title case:" + cappedCity +"<br>");
//  }
// }

// chapter 35 task 12

// chapter 35 task 13

// chapter 35 task 14
// document.write("<h1>THE GEOMETRIZER:</h1>" +"<br>"+"<br>");
// function calcCircumference(radius) {
//     var radius = Number(40);
//     var pi = Number(3.142);
//     var now = Number(2*pi*radius);
//     return(now);
// }
//  document.write("The circumference is: " + calcCircumference() +"<br>");
// function calcArea(radius){
//     var radius = Number(30);
//     var pi = Number(3.142);
//     var r1 = Number((radius*radius));
//     var then = Number(pi*r1);
//     return(then);
// }
// document.write("The area is: " + calcArea()+"<br>");