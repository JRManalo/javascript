//Step 1.
//Create a JavaScript program that prints "Introduction to JavaScript"
//to the console window, and test it in your browser

document.body.innerHTML = "<h1>Introduction to JavaScript</h1>";

//Step 2.
//Write the FizzBuzz program described on page 38 of your text.

for (let i = 1; i <= 20; i++)
{
    let value = i;
    if (i % 3 == 0) value = 'fizz'
    if (i % 5 == 0) value = 'buzz'
    if (i % 3 == 0 && i % 5 == 0) value = 'fizzbuzz'
    console.log(value);
}

//Step 3.
//Write just the countBs function (and the code needed to test it)
//described on page 56 ("Bean Counting") in your text.

function countBs(string)
{
    var count = 0;
    for(i = 0; i < string.length; i++)
    {
        if (string.charAt(i) === "B")
        {
            count++;
        }
    }
    console.log(count);
}

console.log("Counting all uppercase Bs");
	countBs("ball is life");
	countBs("I like Big Butts and I cannot lie");
	countBs("BumbleBees Bite Brown Boogers");
    
//Step 4.
//Write the countChar function (and the code needed to test it)
//described on page 56 ("Bean Counting") in your text.

function countChar(string, character)
{
    var number = 0;
    for(i = 0; i < string.length; i++)
    {
        if (string.charAt(i) === "B" || string.charAt(i) === character)
        {
            number++;
        }
    }
    console.log(number);
}

console.log("Counting all uppercase Bs and passed in char");
	countChar("Backstreet Boys are back", "a");
	countChar("There's a box in the corner", "e");
	countChar("My sister has a Boyfriend", "M");
    
//Step 5.    
//Rewrite countBs to use countChar.
function countBs(string)
{
	return countChar(string, "B");
}

console.log("Counting all uppercase Bs using countChar in countBs");
console.log("The count should be exactly the same as first countBs function");
	countBs("ball is life");
	countBs("I like Big Butts and I cannot lie");
	countBs("BumbleBees Bite Brown Boogers");