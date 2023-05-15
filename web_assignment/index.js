/* curator-feed-new-feed2-layout */
(function(){
  var i,e,d=document,s="script";
  i=d.createElement("script");
  i.async=1;i.charset="UTF-8";
  i.src="https://cdn.curator.io/published/2b3cd0c3-b7d0-4ea6-9228-19bf43152cda.js";
  e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();

/* curator-feed-new-feed-layout */
(function(){
  var i,e,d=document,s="script";
  i=d.createElement("script");
  i.async=1;
  i.charset="UTF-8";
  i.src="https://cdn.curator.io/published/50745ac2-2cdc-453b-bf4f-85ad2e7e11f5.js";
  e=d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
  })();


// Get night mode button and blob element
const nightModeButton = document.querySelector('#night-mode');
const blob = document.querySelector('.blob');

// Trigger event when the state of the night mode button changes
nightModeButton.addEventListener('change', function() {
  // If the night mode button is checked
  if (this.checked) {
    // Set the mode to night mode
    setMode('night');
  } else {
    // Set the mode to day mode
    setMode('day');
  }
});

// Set the mode (night mode or day mode)
function setMode(mode) {
  // Store the current mode in localStorage
  localStorage.setItem('mode', mode);
  // Apply the corresponding styles
  applyMode(mode);
}

// Apply mode styles
function applyMode(mode) {
  // If the mode is night mode
  if (mode === 'night') {
    // Set the left property of the blob element to 0
    blob.style.left = '0';
    // Add the night-mode class to the body element
    document.body.classList.add('night-mode');
    // Add grayscale filter style to all images
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.classList.add('grayscale-filter');
    });
    // Add grayscale filter style to all elements with background images
    const bgImages = document.querySelectorAll('[style*="background-image"]');
    bgImages.forEach((bgImage) => {
      bgImage.classList.add('grayscale-bg-filter');
    });
  } else {
    // Set the left property of the blob element to 50%
    blob.style.left = '50%';
    // Remove the night-mode class from the body element
    document.body.classList.remove('night-mode');
    // Remove grayscale filter style from all images
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.classList.remove('grayscale-filter');
    });
    // Remove grayscale filter style from all elements with background images
    const bgImages = document.querySelectorAll('[style*="background-image"]');
    bgImages.forEach((bgImage) => {
      bgImage.classList.remove('grayscale-bg-filter');
    });
  }
}

// Check the mode on page load and apply the corresponding styles
window.addEventListener('load', function() {
  // Get the current mode from localStorage
  const mode = localStorage.getItem('mode');

  // If the mode is night mode
  if (mode === 'night') {
    // Check the night mode button
    nightModeButton.checked = true;
    // Apply night mode styles
    applyMode('night');
  } else {
    // Uncheck the night mode button
    nightModeButton.checked = false;
    // Apply day mode styles
    applyMode('day');
  }
});


//For contact page:
//when visitor click submit in contact page, a alert will be shown.
function mailSubmit(){
	alert("Thank you for submitting your feedback!");
}


//For Project Page:
//when "view more" button clicked, the gallery does not display, the project details display
function myFunction(details){
	document.getElementById(details).style.display = "block";
	document.getElementById("gallery").style.display = "none";
}
//when "X" cencel button clicked, the project details do not display, the gallery show back
function cancelFunction(details){
	document.getElementById("gallery").style.display = "grid";
	document.getElementById(details).style.display = "none";
}


//For about page:
//get the image width
let myImg = document.querySelector("#world_map");
let realWidth = myImg.clientWidth;
// refresh page whenever window get resized
window.onresize = function(){ location.reload(); }
// set the coords based on different img size
if(realWidth == 1000){
	document.getElementById("HQU").coords = "662,198,712,211,734,191,732,170,764,188,740,220,752,247,727,270,696,252,656,247,631,223";
	document.getElementById("ANU").coords = "780,384,49";
	document.getElementById("GMU").coords = "224,188,305,203,308,214,339,204,304,260,286,251,265,259,224,240,213,214";
}
if(realWidth == 800){
	document.getElementById("HQU").coords = "529,158,565,169,587,155,586,138,612,154,591,175,604,197,580,214,559,205,525,196,504,180";
	document.getElementById("ANU").coords = "624,303,41";
	document.getElementById("GMU").coords = "178,151,245,162,247,174,269,164,244,206,214,204,176,188";
}
if(realWidth == 500){
	document.getElementById("HQU").coords = "355,108,365,86,380,94,371,109,375,124,361,135,347,126,328,121,317,110,330,98";
	document.getElementById("ANU").coords = "390,193,25";
	document.getElementById("GMU").coords = "112,94,154,104,171,102,150,124,132,130,108,112";
}
if(realWidth == 390){
	document.getElementById("HQU").coords = "59,76,275,83,286,66,298,72,285,107,245,88";
	document.getElementById("ANU").coords = "306,149,21";
	document.getElementById("GMU").coords = "87,74,119,83,131,81,119,100,105,100,85,90";
}



