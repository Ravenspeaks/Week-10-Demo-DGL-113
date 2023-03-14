"use strict";
/**
 * this JS file is a modified version of the textbook Lesson 16 example, Listing 16.4.
 * It illustrates how to let use to select a stylesheet
 * */
/*
this code is refactored from the textbook Listing 16.4. 
*/
// By default, other than the first CSS, all others are disabled.
function ssEnable(mySheet = 0) {
  // Other than the base CSS 0, disable all other stylesheets except the selected one.
  for (var i = 1; i < document.styleSheets.length; i++) {
    if (i == mySheet) {
      document.styleSheets[i].disabled = false;
    } else {
      document.styleSheets[i].disabled = true;
    }
  }
}
function sheet() {
  var sheetName = prompt("Stylesheet Name(sheet1, sheet2, sheet3)?");
  var sheetIndex = 1;
  switch (sheetName.toLowerCase()) {
  case "sheet1":
    sheetIndex = 1;
    break;
  case "sheet2":
    sheetIndex = 2;
    break;
  case "sheet3":
    sheetIndex = 3;
    break;
  default:
    sheetIndex = null;
  }
  if (sheetIndex != null) {
    ssEnable(sheetIndex);
  } else {
    alert("Not found - original stylesheet retained.");
  }
}
window.onload = function () {
  document.getElementById("btn1").onclick = sheet;
  // Set the default CSS. Otherwise, all stylesheet will be enabled and the last one takes effect.
  // A good solution is to load the default CSS the last to save this function call.
  // ssEnable(0); //css 0 is the base, so that one should always stay. pick the next one as the defaul
};
