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