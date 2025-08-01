const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = {"pic1.jpg":"a zoomed in pic of an eye",
    "pic2.jpg":"a wave that looks like a cloud",
    "pic3.jpg":"purple flowers",
    "pic4.jpg":"egypt painting",
    "pic5.jpg":"a big butter fly"}
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src',"./images/"+images[i]);
newImage.setAttribute('alt', alts[images[i]]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
