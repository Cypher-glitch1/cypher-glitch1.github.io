//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const storytext = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.';

const charactorX = ['Willy the Goblin','Big Daddy','Father Christmas'];

const placeY = ['the soup kitchen','Disneyland','the White House'];

const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newstory = storytext;

  const xItem = randomValueFromArray(charactorX);
  const yItem = randomValueFromArray(placeY);
  const zItem = randomValueFromArray(insertZ);

  newstory = newstory.replaceAll('insertx',xItem);
  newstory = newstory.replaceAll('inserty',yItem);
  newstory = newstory.replaceAll('insertz',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newstory = newstory.replaceAll('Elijah', name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newstory = newstory.replaceAll('94 fahrenheiit',temperature);
    newstory = newstory.replaceAll('300 pounds',weight);

  }

  story.textContent = newstory;
  story.style.visibility = 'visible';
}
