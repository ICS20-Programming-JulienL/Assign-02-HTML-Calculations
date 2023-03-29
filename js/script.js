// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 29 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
  // get the length from user input
  let length= parseFloat(document.getElementById("prism-length").value)

	// get the height from user input
  let height= parseFloat(document.getElementById("prism-height").value)

  // get the width from user input
  let width= parseFloat(document.getElementById("prism-width").value)


  //calculate the volume 
  let volume = length*height*width;
  //calculate the sirface area
  let widthLength = 2*width*length;
  let heightLength = 2*height*length;
  let heightWidth = 2*height*width;
  let surfaceArea = widthLength+heightLength+heightWidth


  // display the volume and surface area
  
  document.getElementById('answer1').innerHTML = "The volume of your rectangular prism is " +volume.toFixed(2)+"cm<sup>3</sup>";
  // display how much the government will pay
  document.getElementById('answer2').innerHTML = "The surface area of your rectangular prism is "+surfaceArea.toFixed(2)+"cm<sup>2</sup>"; 
}

