// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Ruby Regalado" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle



// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
   console.log('Ginger bread + button was clicked!');



    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
});

// TODO: Hook up event listeners for the rest of the buttons

addgb = document.querySelector("#qty-gb")

document.getElementById('add-gb').addEventListener('click', function(){
    gb = gb + 1;
    addgb.textContent = gb;

});

addcc = document.querySelector("#qty-cc")
document.getElementById('add-cc').addEventListener('click', function(){
    cc = cc + 1;
    addcc.textContent = cc;


});

addsugar = document.querySelector("#qty-sugar")
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar = sugar + 1;
    addsugar.textContent = sugar;

});

document.getElementById('minus-gb').addEventListener('click', function(){
    gb = gb - 1;
    addgb.textContent = gb;

})

document.getElementById('minus-cc').addEventListener('click', function(){
    cc = cc - 1;
    addcc.textContent = cc;
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    sugar = sugar - 1;
    addsugar.textContent = sugar;
    
})






