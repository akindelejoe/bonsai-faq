/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Joseph Akindele


    Filename: js12.js
*/
"use strict";

// Wait for the page to load before running any jQuery
$(document).ready(function () {
   // Hide all answers initially
   $("#faq dd").hide();

   // Add a click event to each question
   $("#faq dt").click(function () {
      // Toggle the visibility of the next <dd> (answer)
      $(this).next().slideToggle();

      // Optional: close other answers
      $("#faq dd").not($(this).next()).slideUp();
   });
});

