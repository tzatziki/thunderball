<!DOCTYPE html>
<html>
<head>
<script>
function myFunction()
{
// Grab everything from the form...
var usernos=new Array();
usernos[0]=document.getElementById("one").value;
usernos[1]=document.getElementById("two").value;
usernos[2]=document.getElementById("three").value;
usernos[3]=document.getElementById("four").value;
usernos[4]=document.getElementById("five").value;
userthunderball=document.getElementById("thunderball").value;

// Work out the draw - five from 1-39, one thunderball from 1-14...
var pool=new Array();
var numbers=new Array();
for (var i=1;i<40;i++) { 
	pool[i]=i
	}
for (var x=0;x<5;x++) { 
	var rand=Math.floor(Math.random() * pool.length+1);
	numbers[x] = pool[rand];
	pool.splice(rand-2,1);
	}
thunderball=Math.floor(Math.random()*14)+1;
numbers.sort(function(a,b){return a-b})

// Match numbers to user's numbers
var match=[false,false,false,false,false,false];
var matchnos=["","","","","",""];
for (var a=0;a<4;a++) { 
	if (usernos[a]==numbers[0]) {
		match[a]=true;
		matchnos[a]=numbers[0];
		}
	else if (usernos[a]==numbers[1]) {
		match[a]=true;
		matchnos[a]=numbers[1];
		}
	else if (usernos[a]==numbers[2]) {
		match[a]=true;
		matchnos[a]=numbers[2];
		}
	else if (usernos[a]==numbers[3]) {
		match[a]=true;
		matchnos[a]=numbers[3];
		}
	else if (usernos[a]==numbers[4]) {
		match[a]=true;
		matchnos[a]=numbers[4];
		}
	}

if (userthunderball==thunderball) {
	match[5]=true;
	matchnos[5]=thunderball;
	}

// Tell the player what they matched
document.getElementById("yay").innerHTML="";
var bingbing=0

for (var i=0;i<4;i++) {
	if (match[i]==true) {
		bingbing=bingbing+1
		}
	}
	
if (bingbing>0) {
	document.getElementById("yay").innerHTML="You got " + bingbing + " number(s). ";
	}
	
if (match[5]==true) {
	document.getElementById("yay").innerHTML+="You got the Thunderball!";
	}
	
// (Clear and) print numbers
document.getElementById("numbers").innerHTML="";

for (var j=0;j<4;j++) {
	document.getElementById("numbers").innerHTML+=(numbers[j] + ", ");
	}

document.getElementById("numbers").innerHTML+=numbers[4] + " / " + thunderball;

document.getElementById("moar").innerHTML="<br>You matched: ";

for (var j=0;j<matchnos.length;j++) {
	document.getElementById("moar").innerHTML+=(matchnos[j] + " ");
	}
}
</script>
</head>

<body>

<h1>Lottery</h1>

<form id="playslip" action="form_action.asp">
  <h2>Thunderball</h2>
  <p id="numbers"></p>
  <p id="yay"></p>
  <p id="moar"></p>
  Enter your numbers...<br/>
  <input type="text" id="one" value="4" size=2>
  <input type="text" id="two" value="8" size=2>
  <input type="text" id="three" value="15" size=2>
  <input type="text" id="four" value="16" size=2>
  <input type="text" id="five" value="32" size=2> | 
  <input type="text" id="thunderball" value="11" size=2>
</form>

<button type="button" onclick="myFunction()">Click me</button>

</body>
</html>
