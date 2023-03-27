// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // get the user work hours
  let length= parseFloat(document.getElementById("prism-length").value)

	// get the hourly pay from the user
  let height= parseFloat(document.getElementById("prism-height").value)

  // get the hourly pay from the user
  let width= parseFloat(document.getElementById("prism-width").value)


  //calculate the pay  
  let volume = length*height*width;
  //calculate the taxes
  let widthLength = 2*width*length;
  let heightLength = 2*height*length;
  let heightWidth = 2*height*width;
  let surfaceArea = widthLength+heightLength+heightWidth


  // display the user's pay
  
  document.getElementById('answer1').innerHTML = "The volume of your rectangular prism is " +volume.toFixed(2)+"cm<sup>3</sup>";
  // display how much the government will pay
  document.getElementById('answer2').innerHTML = "The surface area of your rectangular prism is "+surfaceArea.toFixed(2)+"cm<sup>2</sup>"; 
}

