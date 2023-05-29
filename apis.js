const addressTextDisplay = document.querySelector('.address');
const locationTextDisplay = document.querySelector('.location'); 
const timezoneTextDisplay = document.querySelector('.time-zone');
const ispTextDisplay = document.querySelector('.isp');

fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_T5fWBCLEVU3qaQajE9YbLL3evQKcu&ipAddress=8.8.8.8')
.then((res) => res.json())
.then((data) => {
  console.log(data);
  addressTextDisplay.innerText = `${data.ip}`;
  locationTextDisplay.innerText =
    `${data.location.country}, ${data.location.region}
    ${data.location.postalCode}
    `;
    timezoneTextDisplay.innerText = `${data.location.timezone}`;
    ispTextDisplay.innerText = `${data.isp}`
})
.catch((err) => {
  alert('ERORR!!!')
})

