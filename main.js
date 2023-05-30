function pCreate(text){
  const labels = document.createElement('p');
  labels.className = 'labels';
  labels.innerText = text;

  return labels;
}

function dataTextCreate(name){
  const dataText = document.createElement('h3');
  dataText.className = name


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
  inputIP.placeholder = 'Search for any IP address'
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
  { label : 'IP ADDRESS', name : 'address'},
  { label : 'LOCATION', name : 'location'},
  { label : 'TIMEZONE', name : 'time-zone'},
  { label : 'ISP', name : 'isp'}
]

const singleInfoContainer = document.querySelectorAll('.single-container');

for(let i = 0; i < infoObj.length; i++){
  for(let j = 0; j < singleInfoContainer.length; j++){
    if(i === j){
      singleInfoContainer[j].append(pCreate(infoObj[i].label))
      singleInfoContainer[j].append(dataTextCreate(infoObj[i].name))
    }
  } 
}

const mapDisplay = document.createElement('div');
mapDisplay.setAttribute('id', 'map');
body.append(mapDisplay);





