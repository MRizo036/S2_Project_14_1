"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Maria De Jesus Rizo
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//The line below will run the setStyles function when the page loads within the window.
window.addEventListener("load", setStyles);

//The code block below creates a functions with the name of setStyles. This functions is not passed any parameters. It sets up the style sheet for the page and the style switcher.
function setStyles() {
      //The line below creates a variable with the name of styleNum. This variable is then assigned the value of the function randInt with the parameter of 5.
      var styleNum = randInt(5);
      //The line below creates a variable that is given the value of a link element which is being placed within the HTML document
      var fancySheet = document.createElement("link");
      //This sets the rel attribute of the element created by the fancySheet variable to the value of stylesheet.
      fancySheet.setAttribute("rel", "stylesheet");
      //The line below sets the id attribute of the element within the fancySheet variable to the value of fancySheet.
      fancySheet.setAttribute("id", "fancySheet");
      //The line sets the attribute of the href attribute of the element within the fanySheet variable to the specified value.
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");
      //The line below appends the value of fancySheet to the head of the HTML document.
      document.head.appendChild(fancySheet);
      //The line below creates a variable with the name of figBox which is assigned the value of a fugure element which will be created within the HTML document.
      var figBox = document.createElement("figure");
      //The line below sets the id attribute of the element created by the figBox element to a value of styleThumbs
      figBox.setAttribute("id", "styleThumbs");
      //The line below appends the figbox value to the element with an if of box.
      document.getElementById("box").appendChild(figBox);
      //The code block below creates loop that will continue to run as long as the value of the i variable is less than or equal to 4.
      for (var i = 0; i <= 4; i++) {
            //This creates a variable with the name of sheetImg which is assigned the value of a img element that willbe placed within the HTML document.
            var sheetImg = document.createElement("img");
            //The line below sets the value of the src attribuet of the element created by the sheetIMg variable to the specified value. 
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            //The comment above applies here as well, the only difference being the attribute affected and the value being applied. 
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");
            //The code block below states that the anonymous function created within will e run when the sheetImg variable is clicked on the browser window.
            sheetImg.onclick = function (e) {
                  //The line below states that the href attribute of the element with an id of fancySheet will be set to the value of the alt attribute of e. 
                  document.getElementById("fancySheet").setAttribute("href", e.target.alt);
            }
            //The line below appends the sheetImg variable value to the figBox variable.
            figBox.appendChild(sheetImg);
      }
      //The line below creates a variable with the name of thumbStyles which is them given the value of a style element that will be created in the HTML document.
      var thumbStyles = document.createElement("style");
      //The line below states that the thumbStyles variable will be appended onto the head of the HTML document.
      document.head.appendChild(thumbStyles);
      //The following code block adds the styles provided into the embedded style element within the HTML document which was created in the previous two lines. 
      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                  outline: 1px solid black; \
                  cursor: pointer; \
                  opacity: 0.75; \
            }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                  outline: 1px solid red; \
                  opacity: 1.0; \
            }", 2);
}



function randInt(size) {
      return Math.floor(size * Math.random());
}