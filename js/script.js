// Copyright (c) 2024 Clara All rights reserved
//
// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

function myButtonClicked() {
  // define numbers
  const firstNumber = parseFloat(document.getElementById("first-number").value)
  const secondNumber = parseFloat(document.getElementById("second-number").value)
  let dividend = firstNumber
  let divisor = secondNumber
  let remainder = 0
  // divide
  let numberOfLoops = 0
  let answer = 0
  while (true) {
    if (dividend < divisor) {
      remainder = dividend
      break
    }
    dividend = dividend - divisor
    numberOfLoops++
  }
  answer = numberOfLoops
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + answer + " R " + remainder
}