$(document).ready(function(){

    // make these variables all caps because they're global, by convention
    var GRASS = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Grass.png';
    var ROCKS = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Rocks.png';
    var FOREST = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Forest.png';
    var LAKE = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Lake.png';
    var BEACH = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Beach.png';
    var TOWN = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/City.png';
    var GLACIER = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Glacier.png';
    var DESERT = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Desert.png';
    var MOON = 'https://content.codecademy.com/programs/code-foundations-path/bop-i/variables/assets/Moon.png';
  
  // Check variable one
      // get the value that the user typed and store it a variable
    var inputValueOne = one;
  
        // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseOne = inputValueOne.toUpperCase();
      console.log(inputValueOne);
  
        // get the value of the name attribute of the input tag that the user is typing in
      // we'll use this value to replace the background image on the corresponding box
    var nameToPassOne = 'one-value';
    checkTheInput(upperCaseOne, nameToPassOne);
  
  // Check variable two
    var inputValueTwo = two;
  
        // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseTwo = inputValueTwo.toUpperCase();
      console.log(inputValueTwo);
  
        // get the value of the name attribute of the input tag that the user is typing in
      // we'll use this value to replace the background image on the corresponding box
    var nameToPassTwo = 'two-value';
    checkTheInput(upperCaseTwo, nameToPassTwo);
  
  // Check variable three
    var inputValueThree = three;
  
        // make that input all uppercase to make our check later easier, who knows how the user will type
    var upperCaseThree = inputValueThree.toUpperCase();
      console.log(inputValueThree);
  
        // get the value of the name attribute of the input tag that the user is typing in
      // we'll use this value to replace the background image on the corresponding box
    var nameToPassThree = 'three-value';
    checkTheInput(upperCaseThree, nameToPassThree);
  
  
  
    function checkTheInput (userValue, nameToPass) {
  
      // this is where we create the jquery variable using the id we created/pulled from the name attribute
      var boxToUpdate = $("div." + nameToPass);
  
      // variables that have strings that we'll use to compare what the user has input
      // if you want to change the values we're looking for, this is where to do it
      var grass = "GRASS",
          rocks = "ROCKS",
          forest = "FOREST";
          lake = "LAKE",
          beach = "BEACH";
          town = "TOWN",
          glacier = "GLACIER";
          desert = "DESERT",
          moon = "MOON";
  
      // basic else if statement, if they put in "grass" then replace the background image with the URL thats
      // stored in the global variable above
      // I left the 'else' at bottom in case you want to send an alert or something
      if ( userValue === grass ) {
        boxToUpdate.css( "background-image", "url(" + GRASS + ")" );
      } else if ( userValue === rocks ) {
        boxToUpdate.css( "background-image", "url(" + ROCKS + ")" );
      } else if ( userValue === forest ) {
        boxToUpdate.css( "background-image", "url(" + FOREST + ")" );
      } else if ( userValue === lake ) {
        boxToUpdate.css( "background-image", "url(" + LAKE + ")" );
      } else if ( userValue === beach ) {
        boxToUpdate.css( "background-image", "url(" + BEACH + ")" );
      } else if ( userValue === town ) {
        boxToUpdate.css( "background-image", "url(" + TOWN + ")" );
      } else if ( userValue === glacier ) {
        boxToUpdate.css( "background-image", "url(" + GLACIER + ")" );
      } else if ( userValue === desert ) {
        boxToUpdate.css( "background-image", "url(" + DESERT + ")" );
      } else if ( userValue === moon ) {
        boxToUpdate.css( "background-image", "url(" + MOON + ")" );
      } else {
        console.log("wrong");
      }
  
    }
  
  });