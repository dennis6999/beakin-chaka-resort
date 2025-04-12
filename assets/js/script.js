// Gallery Slider (for gallery.html)
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        img.classList.toggle('zoom');
      });
    });
  });
  
  // Weather Widget (placeholder API)
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Chaka,KE&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      document.getElementById('weather').innerHTML = `Current weather: ${data.weather[0].main}, ${Math.round(data.main.temp - 273.15)}°C`;
    });