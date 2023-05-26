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

body.appendChild(header);
inputContainer.append(inputIP);
inputContainer.append(arrowButton);
header.appendChild(title);
header.appendChild(inputContainer);


