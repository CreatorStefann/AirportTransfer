// Assuming you have an API key and a form to submit the pickup and destination addresses
const apiKey = 'AIzaSyBEBL6IEHcmC5Ag-XuLlTp58arQieI6srk';
const form = document.getElementById('payForm');

// Attach a submit event listener to the form
form.addEventListener('submit', async (event) => {
 event.preventDefault();

 // Get the pickup and destination addresses from the form
 const pickupAddress = document.getElementById('pickupLocation').value;
 const destinationAddress = document.getElementById('destination').value;

 // Make a request to the Google Maps Distance Matrix API
 const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${pickupAddress}&destinations=${destinationAddress}&key=${apiKey}`);
 const data = await response.json();

 // Extract the distance in meters from the API response
 const distanceInMeters = data.rows[0].elements[0].distance.value;

 // Convert the distance from meters to kilometers
 const distanceInKilometers = distanceInMeters / 1000;

 // Calculate the price based on the car type picked and the distance in kilometers
 // For example, if the price per km for a regular car is 0.50, and you have chosen a return transfer
 const pricePerKm = 0.50;
 const isReturnTransfer = document.getElementById('returnTransfer').checked;
 const totalDistance = isReturnTransfer ? distanceInKilometers * 2 : distanceInKilometers;
 const price = totalDistance * pricePerKm;

 // Display the price on the page
 document.getElementById('price').innerText = `Price: $${price.toFixed(2)}`;
 console.log(price);
});