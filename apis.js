const addressTextDisplay = document.querySelector('.address');
const locationTextDisplay = document.querySelector('.location'); 
const timezoneTextDisplay = document.querySelector('.time-zone');
const ispTextDisplay = document.querySelector('.isp');
const ipInput = document.querySelector('.inputIP');
const searchButton = document.querySelector('.button')


function ipValidatior(address){
  const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return pattern.test(address)
}

function ipLocator(address){
  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.API_KEY}&ipAddress=${address}`)
  .then((res) => res.json())
  .then((data) => {
    addressTextDisplay.innerText = `${data.ip}`;
    
    locationTextDisplay.innerText =
      `${data.location.country}, ${data.location.region}
      ${data.location.city}, ${data.location.postalCode}
      `;
      
      timezoneTextDisplay.innerText = `${data.location.timezone}`;
      
      ispTextDisplay.innerText = `${data.isp}`
      
      let map = L.map('map');
      map.setView([`${data.location.lat}`, `${data.location.lng}`], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
  
      L.marker(
        [`${data.location.lat}`,`${data.location.lng}`]
      ).addTo(map)
      
      L.circle(
        [`${data.location.lat}`,`${data.location.lng}`],
        {
          color: '#00FFFF',
          fillColor: '#00FFFF',
          fillOpacity: 0.5,
          radius: 600
        }
      ).addTo(map)
  })
  .catch((err) => {
    alert('FETCH ERROR!!!!')
  })
}

searchButton.addEventListener('click', () => {
  if(ipValidatior(ipInput.value)){
    ipLocator(ipInput.value);
  }
  else{
    alert('INVALID IP ADDRESS');
  }
})



