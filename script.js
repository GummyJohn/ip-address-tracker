function pCreate(text){
  const labels = document.createElement('p');
  labels.className = 'labels';
  labels.innerText = text;

  return labels;
}

function dataTextCreate(text){
  const dataText = document.createElement('h3');
  dataText.className = 'data-text'
  dataText.innerText = text;

  return dataText;
}

const body = document.querySelector('body');

const header = document.createElement('header');
header.className = 'header';

const title = document.createElement('h2');
title.className = 'title';
title.innerText = 'IP Address Tracker'

const inputContainer = document.createElement('div');
inputContainer.className = 'input-container';

const inputIP = document.createElement('input');
  inputIP.className = 'inputIP'
  inputIP.type = 'text';
  inputIP.placeholder = 'Search for any IP address or domain'
;

const arrowButton = document.createElement('button');
  arrowButton.className = 'button'
  arrowButton.innerHTML = `
    <img src="./images/icon-arrow.svg" alt="">
  `
;

const ipInfoContainer = document.createElement('div');
ipInfoContainer.className = 'ip-container';

for(let i = 0; i < 4; i++){
  const singleInfoContainers = document.createElement('div');
  singleInfoContainers.className = 'single-container';
  ipInfoContainer.appendChild(singleInfoContainers); 
}

body.append(header);
inputContainer.append(inputIP);
inputContainer.append(arrowButton);
header.append(title);
header.append(inputContainer);
header.append(ipInfoContainer);

let infoObj = [
  { 'label' : 'IP ADDRESS', 'info' : 'asdfasdf'},
  { 'label' : 'LOCATION', 'info' : 'asdfacxvb'},
  { 'label' : 'TIMEZONE', 'info' : 'asdf123f'},
  { 'label' : 'ISP', 'info' : 'asdfasdf7890'}
]

const singleInfoContainer = document.querySelectorAll('.single-container');

for(let i = 0; i < infoObj.length; i++){
  for(let j = 0; j < singleInfoContainer.length; j++){
    if(i === j){
      singleInfoContainer[j].append(pCreate(infoObj[i]['label']))
      singleInfoContainer[j].append(
        dataTextCreate(infoObj[i]['info'])
      )
    }
  } 
}

const mapDisplay = document.createElement('div');
mapDisplay.className = 'map-display';

body.append(mapDisplay);






